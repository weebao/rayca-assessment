import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  IconPlayerPlay,
  IconPlayerStop,
  IconClockStop,
  IconTrashX,
  IconSettings,
  IconCopy,
  IconCalendarClock,
  IconShare3,
  IconLinkPlus,
  IconCloudDownload
} from "@tabler/icons-react";
import {
  Button,
  Flex,
  IconButton,
  TextFieldRoot,
  TextFieldSlot,
  TextFieldInput,
  Separator,
} from "@radix-ui/themes";

export const DownloadNav: React.FC = () => {
  return (
    <Flex className="download-nav" gap="3" align="center" justify="between">
      <TextFieldRoot className="add-url">
        <TextFieldSlot>
          <IconLinkPlus height="24" width="24" />
        </TextFieldSlot>
        <TextFieldInput
          placeholder="Add Url"
          variant="soft"
          size="3"
          radius="large"
        />
        <TextFieldSlot>
          <IconButton>
            <IconCloudDownload />
          </IconButton>
        </TextFieldSlot>
      </TextFieldRoot>
      <Separator orientation="vertical" size="2"/>
      <Button variant="ghost" className="nav-btn">
        <IconPlayerPlay height="24" width="24" />
        <div>Resume</div>
      </Button>
      <Button variant="ghost" className="nav-btn">
        <IconPlayerStop height="24" width="24" />
        <div>Stop</div>
      </Button>
      <Button variant="ghost" className="nav-btn">
        <IconClockStop height="24" width="24" />
        <div>Stop All</div>
      </Button>
      <Separator orientation="vertical" size="2"/>
      <Button variant="ghost" className="nav-btn">
        <IconTrashX height="24" width="24" />
        <div>Delete</div>
      </Button>
      <Button variant="ghost" className="nav-btn">
        <IconSettings height="24" width="24" />
        <div>Options</div>
      </Button>
      <Button variant="ghost" className="nav-btn rotate">
        <IconCopy height="24" width="24" />
        <div>Queues</div>
      </Button>
      <Button variant="ghost" className="nav-btn">
        <IconCalendarClock height="24" width="24" />
        <div>Schedule</div>
      </Button>
      <Button variant="ghost" className="nav-btn">
        <IconShare3 height="24" width="24" />
        <div>Share</div>
      </Button>
    </Flex>
  );
};
