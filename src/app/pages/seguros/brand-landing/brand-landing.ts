import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { InsuranceService, BrandData } from '../../../services/insurance.service';

@Component({
  selector: 'app-brand-landing',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './brand-landing.html',
  styleUrl: './brand-landing.scss',
})
export class BrandLandingComponent implements OnInit, OnDestroy {

  private route    = inject(ActivatedRoute);
  private meta     = inject(Meta);
  private title    = inject(Title);
  readonly svc     = inject(InsuranceService);

  brand: BrandData | null = null;
  notFound = false;

  // FAQ state
  openFaqIndex: number | null = null;

  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('brandSlug') ?? '';
      this.brand = this.svc.getBrand(slug);
      this.notFound = !this.brand;
      if (this.brand) this.setMeta(this.brand);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggleFaq(i: number): void {
    this.openFaqIndex = this.openFaqIndex === i ? null : i;
  }

  waHref(brand: BrandData): string {
    return this.svc.waHref(brand.waText);
  }

  savingsPercent(brand: BrandData): number {
    return this.svc.savingsPercent(brand.marketPrice, brand.carlaPrice);
  }

  formatARS(n: number): string {
    return this.svc.formatARS(n);
  }

  private setMeta(b: BrandData): void {
    this.title.setTitle(b.seoTitle);
    this.meta.updateTag({ name: 'description',         content: b.seoDescription });
    this.meta.updateTag({ property: 'og:title',        content: b.seoTitle });
    this.meta.updateTag({ property: 'og:description',  content: b.seoDescription });
    this.meta.updateTag({ property: 'og:image',        content: b.heroImage });
    this.meta.updateTag({ name: 'twitter:title',       content: b.seoTitle });
    this.meta.updateTag({ name: 'twitter:description', content: b.seoDescription });
  }
}
