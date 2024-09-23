import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Database, Building2, Users, ShoppingCart, Lightbulb, PieChart } from 'lucide-react';

const chartData = [
  { name: 'Data Volume', value: 65 },
  { name: 'Processing Speed', value: 80 },
  { name: 'User Adoption', value: 55 },
  { name: 'ROI', value: 70 },
];

const TabContent = ({ icon: Icon, title, description, bulletPoints }) => (
  <Card className="w-full">
    <CardHeader>
      <div className="flex items-center space-x-2">
        <Icon className="h-6 w-6" />
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">BI Integration Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="intro">Intro</TabsTrigger>
          <TabsTrigger value="dw">DW</TabsTrigger>
          <TabsTrigger value="erp">ERP</TabsTrigger>
          <TabsTrigger value="crm">CRM</TabsTrigger>
          <TabsTrigger value="ecom">E-com</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="intro">
            <TabContent
              icon={PieChart}
              title="Introduction to BI Integration"
              description="Understanding BI's crucial role in modern business ecosystems"
              bulletPoints={[
                "Definition and importance of Business Intelligence",
                "BI's evolution and current landscape",
                "Key benefits: data-driven decision making, improved efficiency, competitive advantage",
                "Overview of BI's integration with DW, ERP, CRM, and E-commerce",
                "Challenges in implementing integrated BI solutions",
                "Success stories of companies leveraging integrated BI"
              ]}
            />
          </TabsContent>
          <TabsContent value="dw">
            <TabContent
              icon={Database}
              title="BI and Data Warehousing"
              description="Exploring the synergy between BI and Data Warehousing"
              bulletPoints={[
                "Fundamentals of data warehousing and its importance",
                "ETL processes and data quality management",
                "Data modeling techniques for effective BI",
                "Real-time data warehousing and its impact on BI",
                "Case study: How Netflix uses data warehousing for content recommendations",
                "Future trends: Cloud data warehousing and its implications for BI"
              ]}
            />
          </TabsContent>
          <TabsContent value="erp">
            <TabContent
              icon={Building2}
              title="BI and ERP Systems"
              description="Enhancing ERP functionality with Business Intelligence"
              bulletPoints={[
                "Overview of ERP systems and their evolution",
                "Integration challenges between BI and ERP",
                "Benefits of BI-enhanced ERP: improved reporting, forecasting, and planning",
                "Real-time analytics in ERP systems",
                "Case study: How Toyota uses BI-integrated ERP for supply chain optimization",
                "Emerging trends: AI and machine learning in ERP-BI integration"
              ]}
            />
          </TabsContent>
          <TabsContent value="crm">
            <TabContent
              icon={Users}
              title="BI in Customer Relationship Management"
              description="Leveraging BI to transform customer interactions and insights"
              bulletPoints={[
                "Evolution of CRM systems and the role of BI",
                "Customer segmentation and personalization through BI",
                "Predictive analytics for customer behavior and churn prevention",
                "Real-time customer insights and decision-making",
                "Case study: How Amazon uses BI-driven CRM for personalized marketing",
                "Future of BI in CRM: AI-powered chatbots and virtual assistants"
              ]}
            />
          </TabsContent>
          <TabsContent value="ecom">
            <TabContent
              icon={ShoppingCart}
              title="BI in E-commerce"
              description="Revolutionizing online retail with data-driven insights"
              bulletPoints={[
                "BI applications in e-commerce: inventory management, pricing, and marketing",
                "Real-time analytics for personalized shopping experiences",
                "Fraud detection and risk management using BI",
                "Optimizing the supply chain with predictive analytics",
                "Case study: How Walmart uses BI for omnichannel retail strategy",
                "Emerging trends: Voice commerce and IoT integration in e-commerce BI"
              ]}
            />
          </TabsContent>
          <TabsContent value="future">
            <TabContent
              icon={Lightbulb}
              title="Future of BI Integration"
              description="Exploring emerging trends and technologies in Business Intelligence"
              bulletPoints={[
                "AI and machine learning: The next frontier in BI",
                "Edge computing and its impact on real-time analytics",
                "Blockchain in BI: Ensuring data integrity and transparency",
                "Augmented analytics: Democratizing data insights",
                "The role of 5G in transforming BI capabilities",
                "Ethical considerations and data privacy in future BI systems"
              ]}
            />
          </TabsContent>
        </div>
      </Tabs>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">BI Integration Performance Metrics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
