import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Simulate form submission
  //   toast({
  //     title: "Message sent successfully!",
  //     description: "Thank you for your message. I'll get back to you soon.",
  //   });
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Create a new FormData object
  const submissionData = new FormData();
  
  // Add your Web3Forms Access Key
  submissionData.append("access_key", "55bac7af-b9f5-4efa-8a5d-d1125e643561"); 
  
  // Add your form fields
  submissionData.append("name", formData.name);
  submissionData.append("email", formData.email);
  submissionData.append("subject", formData.subject);
  submissionData.append("message", formData.message);

  try {
    // Send the data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData
    });

    const result = await response.json();

    if (result.success) {
      // If it works, show the success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      // Clear the form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      // If Web3Forms rejects it
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive", // Assuming you have an error style configured
      });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    toast({
      title: "Connection error.",
      description: "Could not send the message. Please check your internet.",
      variant: "destructive",
    });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-300">prasoon.dwivedi884@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-slate-300">+91 8840-939-473</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-slate-300">Prayagraj, Uttar Pradesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center lg:text-left">
              <p className="text-slate-300 mb-4">
                Available for full-time opportunities.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>

          <Card className="lg:col-span-2 bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="Project Inquiry / Job Opportunity / etc."
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;