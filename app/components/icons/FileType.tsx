import React from 'react';
import {
  IconAppWindow,
  IconBrandAndroid,
  IconFileText,
  IconFileZip,
  IconMusic,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";

interface FileTypeProps {
  name: string;
}

export const FileType: React.FC<FileTypeProps> = ({ name }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'music':
        return <IconMusic />;
      case 'archive':
        return <IconFileZip />;
      case 'video':
        return <IconVideo />;
      case 'program':
        return <IconAppWindow />;
      case 'document':
        return <IconFileText />;
      case 'app':
        return <IconBrandAndroid />;
      case 'image':
        return <IconPhoto />;
      default:
        return null;
    }
  };

  return <>{getIcon()}</>;
};