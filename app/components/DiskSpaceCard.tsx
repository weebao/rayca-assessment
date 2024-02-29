import { Card, Flex, Button } from '@radix-ui/themes';
import { Database, GradientArc } from '@/components/icons';
import { IconDots } from '@tabler/icons-react';

interface DiskSpaceCardProps {
  totalSpace: number;
  usedSpace: number;
}

export const DiskSpaceCard: React.FC<DiskSpaceCardProps> = ({ totalSpace, usedSpace }) => {
  const percentage = (usedSpace / totalSpace) * 100;

  return (
    <Card className="disk-space font-open">
      <Flex align="center" justify="between">
        <Flex align="center" gap="2">
          <Database className="database-icon" />
          <span>Disk Space</span>
        </Flex>
        <IconDots />
      </Flex>
      <div className="usage">
        <GradientArc className="arc-icon" />
        <Flex align="center" gap="3" className="reaction">
          <span>0%</span>
          <span className="emoji">☹️</span>
          <span>100%</span>
        </Flex>
        <div className="percentage">
          90%
        </div>
        <span>C:\Downloads</span>
      </div>
      <Button className="gradient-btn">
        Disk Cleaner
      </Button>
    </Card>
  );
};