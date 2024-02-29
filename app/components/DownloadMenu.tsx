import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Flex } from "@radix-ui/themes";
import { FileType } from "@/components/icons";
import {
  IconChevronDown,
  IconFolders,
  IconFolderCheck,
  IconFolderDown,
} from "@tabler/icons-react";

export const DownloadMenu: React.FC = () => {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            <Flex className="font-mont" align="center" gap="3">
              <IconFolders />
              <span>All Downloads</span>
            </Flex>
            <IconChevronDown className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <MenuItems />
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-2">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            <Flex className="font-mont" align="center" gap="3">
              <IconFolderDown />
              <span>Unfinished</span>
            </Flex>
            <IconChevronDown className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <MenuItems />
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-3">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger className="AccordionTrigger">
            <Flex className="font-mont" align="center" gap="3">
              <IconFolderCheck />
              <span>Finished</span>
            </Flex>
            <IconChevronDown className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <MenuItems />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const MenuItems = () => {
  return (
    <Flex direction="column">
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="music" />
          <span>Musics</span>
        </Flex>
      </div>
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="archive" />
          <span>Compressed</span>
        </Flex>
      </div>
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="video" />
          <span>Videos</span>
        </Flex>
      </div>
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="program" />
          <span>Programs</span>
        </Flex>
      </div>
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="document" />
          <span>Documents</span>
        </Flex>
      </div>
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="app" />
          <span>APKs</span>
        </Flex>
      </div>
      <div className="AccordionContentItem">
        <Flex className="font-mont" align="center" gap="3">
          <FileType name="image" />
          <span>Images</span>
        </Flex>
      </div>
    </Flex>
  );
};