import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LaramaidComponent = () => {
  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };


  return (
    <section className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-0 w-16 h-16 border border-pink-200 rounded-lg rotate-12 opacity-50"></div>
      <div className="absolute bottom-1/4 right-0 w-16 h-16 border border-purple-200 rounded-lg -rotate-12 opacity-50"></div>

      <Card className="relative bg-gradient-to-br from-white to-pink-50 dark:from-gray-900 dark:to-purple-900/50 border-pink-100 dark:border-purple-700/50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
            Elevate Your Laravel Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="perfect-for" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="perfect-for">Perfect For</TabsTrigger>
              <TabsTrigger value="why-laramaid">Why Laramaid?</TabsTrigger>
            </TabsList>
            <TabsContent value="perfect-for">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Architects:</strong> Design your application
                    structure visually
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Teams:</strong> Maintain consistency between design
                    and implementation
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Developers:</strong> Quickly scaffold complex
                    application structures
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Projects:</strong> Keep documentation and code in
                    sync
                  </span>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="why-laramaid">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Save Time:</strong> Eliminate repetitive boilerplate coding
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Maintain Consistency:</strong> Ensure your code matches your design
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Improve Communication:</strong> Share clear visual representations of your code
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  <span>
                    <strong>Accelerate Development:</strong> Quick start with proper structure
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                  <span>
                    <strong>Stay Flexible:</strong> Easily modify and update both code and diagrams
                  </span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
              Getting Started
            </h3>
            <div className="bg-gray-900 p-4 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <code className="text-pink-300">
                composer require fase22/laramaid
              </code>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => copyToClipboard("composer require fase22/laramaid")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Get Started with Laramaid
        </Button>
      </div>
    </section>
  );
};

export default LaramaidComponent;
