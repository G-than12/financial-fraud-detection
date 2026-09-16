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
    <div className="min-h-screen bg-[#fafaf9] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <ProjectOverview />
        </ScrollReveal>
        <ScrollReveal>
          <DatasetSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreprocessingSection />
        </ScrollReveal>
        <ScrollReveal>
          <ClusteringSection />
        </ScrollReveal>
        <ScrollReveal>
          <ClassificationSection />
        </ScrollReveal>
        <ScrollReveal>
          <HyperparameterSection />
        </ScrollReveal>
        <ScrollReveal>
          <ModelArtifactsSection />
        </ScrollReveal>
        <ScrollReveal>
          <MethodologyTimeline />
        </ScrollReveal>
        <ScrollReveal>
          <TechnicalDetailsAccordion />
        </ScrollReveal>
        <ScrollReveal>
          <LimitationsAndFuture />
        </ScrollReveal>
        <ScrollReveal>
          <AuthorSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
