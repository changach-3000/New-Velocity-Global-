import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const ResourceDownloadButton = ({ resource, variant = "default", size = "default", className }) => {
  const [downloading, setDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!resource.fileUrl) {
      toast({
        title: "Download Unavailable",
        description: "This resource does not have a valid file URL.",
        variant: "destructive",
      });
      return;
    }

    setDownloading(true);

    // Simulate network delay for better UX since these are likely placeholder files
    setTimeout(() => {
      // In a real scenario with actual files:
      // window.open(resource.fileUrl, '_blank');
      
      // For this demo with placeholder paths:
      console.log(`Downloading ${resource.fileName} from ${resource.fileUrl}`);
      
      setDownloading(false);
      
      toast({
        title: "Download Complete",
        description: `Successfully downloaded ${resource.fileName}`,
        action: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      });
    }, 1500);
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown size';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col gap-1">
      <Button 
        variant={variant} 
        size={size} 
        className={cn("gap-2", className)}
        onClick={handleDownload}
        disabled={downloading}
      >
        {downloading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        {downloading ? "Downloading..." : "Download"}
      </Button>
      {resource.fileSize && (
        <span className="text-[10px] text-muted-foreground text-center">
          {formatFileSize(resource.fileSize)}
        </span>
      )}
    </div>
  );
};

export default ResourceDownloadButton;