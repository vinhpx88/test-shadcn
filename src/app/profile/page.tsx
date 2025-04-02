"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, Mail, Key } from "lucide-react";
import { ModeToggle } from "../dashboard/mode-toggle";

interface UserData {
  id: string;
  username: string;
  email: string;
  name?: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, fetch user data from an API
    const fetchUserData = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/user/profile');
        // const data = await response.json();
        
        // For now, we'll use mock data
        setUser({
          id: "1",
          username: "admin",
          email: "admin@example.com",
          name: "Admin User"
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  const handleBackToDashboard = () => {
    router.push("/dashboard");
  };
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-6 bg-background">
      {/* Fixed positioned theme toggle at bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <ModeToggle />
      </div>
      
      <div className="w-full max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={handleBackToDashboard}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        
        <Card className="w-full">
          <CardHeader className="flex flex-row items-start space-x-6">
            <div className="bg-muted p-4 rounded-full">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/images/default-avatar.png" alt="User Profile" />
                <AvatarFallback className="text-4xl">
                  {user?.username.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <CardTitle className="text-2xl font-bold">{user?.name || user?.username}</CardTitle>
                <CardDescription>User Profile</CardDescription>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1 flex-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value={user?.username} readOnly />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1 flex-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={user?.email} readOnly />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Key className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1 flex-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value="********" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button variant="outline">Edit Profile</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
