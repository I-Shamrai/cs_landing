<template>
  <div class="promo-page">
    <video
      autoplay
      muted
      playsinline
      loop
      class="promo-video"
      src="/assets/promo.mp4"
    />

    <div class="overlay" />

    <div class="content">
      <div class="badge">
        Enterprise Security for Small Business
      </div>

      <h1 class="headline">
        <span class="highlight pr-8">Defend</span>
        <span class="highlight pr-8">Audit</span>
        <span class="highlight pr-8">Train</span>
      </h1>

      <p class="description">
        Enterprise-grade cybersecurity protection tailored for growing businesses. We identify vulnerabilities, secure your infrastructure, and transform your team into your strongest defense.
      </p>

      <div class="features">
        <div class="feature">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          <span class="feature-title">Security Audits</span>
          <p class="feature-desc">
            Comprehensive vulnerability assessments with clear, actionable reports.
          </p>
        </div>

        <div class="feature">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle
              cx="9"
              cy="7"
              r="4"
            />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span class="feature-title">Team Training</span>
          <p class="feature-desc">
            Real-world phishing simulations and security awareness workshops.
          </p>
        </div>

        <div class="feature">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect
              x="3"
              y="11"
              width="18"
              height="11"
              rx="2"
              ry="2"
            />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span class="feature-title">Rapid Response</span>
          <p class="feature-desc">
            Immediate remediation steps to protect your critical assets.
          </p>
        </div>
      </div>

      <a
        href="mailto:i.shamrai.work@gmail.com"
        class="cta-button"
      >
        Request Consulting
        <svg
          class="cta-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use "@imports/_colors.module";

.promo-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
}

.promo-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}

.content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}

.headline {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.highlight {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2em;
  color: colors.$green-2;
}

.description {
  font-size: 1.125rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  text-align: left;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.icon {
  width: 32px;
  height: 32px;
  margin-bottom: 0.75rem;
  color: #4ade80;
}

.feature-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.5;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #4ade80;
  color: #0f172a;
  text-decoration: none;
  font-weight: 700;
  border-radius: 0.75rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(74, 222, 128, 0.3);
  }
}

.cta-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .content {
    padding: 1.5rem;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .feature {
    align-items: center;
    text-align: center;
  }
}
</style>
