<template>
  <v-container class="promo-page boundlessWidth w-100 pa-0">
    <video
      autoplay
      muted
      playsinline
      loop
      class="promo-video"
      src="/assets/promo.mp4"
    />

    <div class="overlay" />

    <v-container class="content pt-2">
      <div class="badge mt-8">
        Internal Communication Request
      </div>

      <h1 class="headline">
        Dear Geniusee Management
      </h1>

      <p class="description">
        We would like to request permission to send the following company-wide email to all Geniusee team members announcing the new Solution Architect joining the team.
      </p>

      <div class="email-preview">
        <geniusee-email-template />
      </div>

      <a
        href="mailto:i.shamrai.work@gmail.com"
        class="cta-button"
      >
        Approve Request
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
    </v-container>
  </v-container>
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
  background: colors.$half-black;
  filter: blur(20px);
}

.content {
  position: relative;
  z-index: 1;
  padding: 0 6rem;
  margin: 0;
  text-align: center;
  background: rgba(colors.$half-black, 0.6);
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
}

.headline {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.125rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.email-preview {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  color: black;
  max-height: 600px;
  overflow-y: auto;
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

  .email-preview {
    padding: 1rem;
  }
}
</style>
