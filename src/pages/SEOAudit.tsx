import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";
import Confetti from 'react-confetti';

const SEOAudit = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    const steps = [
      "Analyzing meta tags...",
      "Checking mobile responsiveness...",
      "Scanning content structure...",
      "Evaluating page speed...",
      "Analyzing keyword rankings..."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress((prev) => prev + 20);
        toast({
          title: "Analysis in Progress",
          description: steps[currentStep],
          duration: 2000,
        });
        currentStep++;
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        setShowConfetti(true);
        toast({
          title: "Analysis Complete!",
          description: "Your comprehensive SEO report will be sent to your email shortly, including your current Google rankings and keyword positions.",
          duration: 5000,
        });
        // Hide confetti after 5 seconds
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    simulateAnalysis();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showConfetti && <Confetti 
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
      />}
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Free SEO Audit Tool
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Get a comprehensive analysis of your website's SEO performance and discover opportunities for improvement
            </p>
            <p className="text-lg text-gray-400">
              Receive a detailed report including your current Google rankings and complete keyword position analysis
            </p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Website URL
                </label>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  disabled={isAnalyzing}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  disabled={isAnalyzing}
                />
              </div>

              {isAnalyzing ? (
                <div className="space-y-4">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <Button disabled className="w-full">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Your Website...
                  </Button>
                </div>
              ) : (
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  {progress === 100 ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Analysis Complete
                    </>
                  ) : (
                    "Start Free SEO Audit"
                  )}
                </Button>
              )}
            </form>

            {!isAnalyzing && progress === 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>Complete Google Rankings Report</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>Keyword Position Analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>Technical SEO Analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>Page Speed Insights</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAudit;