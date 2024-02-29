import React from "react";
import {
  Flex,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@radix-ui/themes";
import {
  IconFile,
  IconFileArrowRight,
  IconFolderOpen,
  IconReload,
  IconPlayerStop,
  IconRefresh,
  IconLayersIntersect,
  IconInfoSquare,
  IconChevronRight
} from "@tabler/icons-react";
import {
  IconFileEdit,
  IconFileReload,
  IconSquareMinus
} from "@/components/icons";

export const ContextMenu: React.FC = () => {
  return (
    <ContextMenuContent>
      <ContextMenuItem>
        <Flex align="center" justify="center">
          <IconFile />
          <span>Open</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuItem>
        <Flex align="center" justify="center">
          <IconFileArrowRight />
          <span>Open With</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuItem>
        <Flex align="center" justify="center">
          <IconFolderOpen />
          <span>Open Folder</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Flex align="center" justify="center">
          <IconFileEdit />
          <span>Move / Rename</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Flex align="center" justify="center">
          <IconFileReload />
          <span>Redownload</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem className="disabled">
        <Flex align="center" justify="center">
          <IconReload />
          <span>Resume Reload</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem className="disabled">
        <Flex align="center" justify="center">
          <IconPlayerStop />
          <span>Stop Download</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuItem className="disabled">
        <Flex align="center" justify="center">
          <IconRefresh />
          <span>Refresh Download Address</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Flex align="center" justify="between" width="100%">
          <Flex align="center">
            <IconLayersIntersect />
            <span>Add to Queue</span>
          </Flex>
          <IconChevronRight className="no-margin-right" />
        </Flex>
      </ContextMenuItem>
      <ContextMenuItem className="disabled">
        <Flex align="center" justify="center">
          <IconSquareMinus />
          <span>Delete from Queue</span>
        </Flex>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Flex align="center" justify="center">
          <IconInfoSquare />
          <span>Properties</span>
        </Flex>
      </ContextMenuItem>
    </ContextMenuContent>
  );
};
