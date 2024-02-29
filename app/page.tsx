"use client";

import Image from "next/image";

import {
  Button,
  Card,
  Container,
  Flex,
  TextFieldRoot,
  TextFieldSlot,
  TextFieldInput,
} from "@radix-ui/themes";
import { Search } from "@/components/icons";
import { DownloadMenu } from "@/components/DownloadMenu";
import { DownloadNav } from "@/components/DownloadNav";
import { DownloadTable } from "@/components/DownloadTable";
import { DiskSpaceCard } from "@/components/DiskSpaceCard";

export default function Home() {
  return (
    <main className="main">
      <Card className="font-mont window">
        <div className="bar">
          <Flex>
            <Image src="/logo.webp" alt="IDM" layout="fill" />
            <span>Internet Download Manager 10.36</span>
          </Flex>
          <div className="bar-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <nav className="menu">
          <Flex className="menu-bar" gap="5">
            <Button variant="ghost">Tasks</Button>
            <Button variant="ghost">File</Button>
            <Button variant="ghost">Downloads</Button>
            <Button variant="ghost">View</Button>
            <Button variant="ghost">Help</Button>
          </Flex>
          <TextFieldRoot className="menu-search">
            <TextFieldSlot>
              <Search height="20" width="20" />
            </TextFieldSlot>
            <TextFieldInput
              placeholder="Search in the list"
              variant="soft"
              size="3"
              radius="large"
            />
          </TextFieldRoot>
        </nav>
        <div className="content">
          <div className="side-menu">
            <DownloadMenu />
            <DiskSpaceCard />
          </div>
          <div className="downloads">
            <DownloadNav />
            <DownloadTable />
          </div>
        </div>
      </Card>
    </main>
  );
}
