import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectOverview } from './components/ProjectOverview';
import { DatasetSection } from './components/DatasetSection';
import { PreprocessingSection } from './components/PreprocessingSection';
import { ClusteringSection } from './components/ClusteringSection';
import { ClassificationSection } from './components/ClassificationSection';
import { HyperparameterSection } from './components/HyperparameterSection';
import { ModelArtifactsSection } from './components/ModelArtifactsSection';
import { MethodologyTimeline } from './components/MethodologyTimeline';
import { TechnicalDetailsAccordion } from './components/TechnicalDetailsAccordion';
import { LimitationsAndFuture } from './components/LimitationsAndFuture';
import { AuthorSection } from './components/AuthorSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#fafaf9] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 transition-colors duration-200">
        <Navbar />
      <main>
        <Hero />
        <ScrollReveal direction="none">
          <ProjectOverview />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <DatasetSection />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <PreprocessingSection />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <ClusteringSection />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <ClassificationSection />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <HyperparameterSection />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <ModelArtifactsSection />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <MethodologyTimeline />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <TechnicalDetailsAccordion />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <LimitationsAndFuture />
        </ScrollReveal>
        <ScrollReveal direction="none">
          <AuthorSection />
        </ScrollReveal>
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
