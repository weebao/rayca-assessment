"use client";

import React, { useState } from "react";
import {
  IconChevronUp,
  IconChevronDown,
  IconPlayerStop,
  IconDownload,
  IconUpload,
} from "@tabler/icons-react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FileType, Speedometer } from "@/components/icons";
import { ContextMenu } from "@/components/ContextMenu";
import {
  Flex,
  Button,
  Checkbox,
  ContextMenuRoot,
  ContextMenuTrigger,
  TableRoot,
  TableHeader,
  TableBody,
  TableRow,
  TableColumnHeaderCell,
  TableRowHeaderCell,
  TableCell,
} from "@radix-ui/themes";

export type Download = {
  select?: boolean;
  id: number;
  name: string;
  type: string;
  size: number;
  status: number | "paused";
  time: number;
  lastModified: string;
};

const data: Download[] = [
  {
    id: 1,
    name: "UIUXMonster.jpg",
    type: "Image",
    size: 762880,
    status: 100,
    time: 0,
    lastModified: "2023/08/09",
  },
  {
    id: 2,
    name: "2pacCover.mp3",
    type: "Music",
    size: 3145728,
    status: 80,
    time: 0,
    lastModified: "2023/08/09",
  },
  {
    id: 3,
    name: "UIUXMonster.zip",
    type: "Archive",
    size: 12582912,
    status: 100,
    time: 0,
    lastModified: "2023/08/09",
  },
  {
    id: 4,
    name: "Document.pdf",
    type: "Document",
    size: 2097152,
    status: 50,
    time: 312,
    lastModified: "2023/08/09",
  },
  {
    id: 5,
    name: "Better.Call.Saul.mp3",
    type: "Video",
    size: 2684354560,
    status: 0,
    time: 0,
    lastModified: "2023/08/09",
  },
  {
    id: 6,
    name: "Call of Duty",
    type: "App",
    size: 12582912,
    status: "paused",
    time: 432,
    lastModified: "2023/08/09",
  },
  {
    id: 7,
    name: "2pacCover.rar",
    type: "Archive",
    size: 12582912,
    status: 10,
    time: 0,
    lastModified: "Today",
  },
  {
    id: 8,
    name: "Mima.exe",
    type: "Program",
    size: 33554432,
    status: 100,
    time: 0,
    lastModified: "2023/08/09",
  },
];

const columnHelper = createColumnHelper<Download>();

export const columns = [
  columnHelper.accessor("select", {
    header: ({ table }) => (
      <Flex justify="center" align="center" width="100%" height="100%">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </Flex>
    ),
    cell: ({ row }) => (
      <Flex justify="center" align="center" width="100%" height="100%">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </Flex>
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("name", {
    header: (
      { column } // Access the column object
    ) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting()} // Toggle sorting
      >
        Name
        {column.getIsSorted() ? (
          column.getIsSorted() === "desc" ? (
            <IconChevronDown />
          ) : (
            <IconChevronUp />
          )
        ) : (
          <div className="chevron-up-down">
            <IconChevronUp />
            <IconChevronDown />
          </div>
        )}
      </Button>
    ),
    cell: (props) => {
      const type = props.row.original.type;
      const name = props.getValue();

      return (
        <Flex align="center" gap="3">
          <FileType name={type.toLowerCase()} />
          <div className="name">
            <div className="name-file">{name}</div>
            <div className="name-type">{type}</div>
          </div>
        </Flex>
      );
    },
  }),
  columnHelper.accessor("size", {
    header: (
      { column } // Access the column object
    ) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting()} // Toggle sorting
      >
        Size
        {column.getIsSorted() ? (
          column.getIsSorted() === "desc" ? (
            <IconChevronDown />
          ) : (
            <IconChevronUp />
          )
        ) : (
          <div className="chevron-up-down">
            <IconChevronUp />
            <IconChevronDown />
          </div>
        )}
      </Button>
    ),
    cell: (props) => {
      const value = props.getValue();
      const bytes = value * 1024;
      if (bytes >= 1099511627776) {
        return `${(bytes / 1099511627776).toFixed(2)} TB`;
      } else if (bytes >= 1073741824) {
        return `${(bytes / 1073741824).toFixed(2)} GB`;
      } else if (bytes >= 1048576) {
        return `${(bytes / 1048576).toFixed(2)} MB`;
      } else if (bytes >= 1024) {
        return `${(bytes / 1024).toFixed(2)} KB`;
      } else {
        return `${bytes} bytes`;
      }
    },
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        Status
        {column.getIsSorted() ? (
          column.getIsSorted() === "desc" ? (
            <IconChevronDown />
          ) : (
            <IconChevronUp />
          )
        ) : (
          <div className="chevron-up-down">
            <IconChevronUp />
            <IconChevronDown />
          </div>
        )}
      </Button>
    ),
    cell: (props) => {
      const value = props.getValue();
      if (value === "paused") {
        return (
          <Flex align="center" gap="1">
            <IconPlayerStop />
            <span>Paused</span>
          </Flex>
        );
      }
      return value === 100 ? (
        "Complete"
      ) : (
        <Flex direction="column" gap="2">
          <span className="progress-value">{`${value}%`}</span>
          <div className="progress-bar">
            <div style={{ width: `${value}%` }}></div>
          </div>
        </Flex>
      );
    },
  }),
  columnHelper.accessor("time", {
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        Time Left
        {column.getIsSorted() ? (
          column.getIsSorted() === "desc" ? (
            <IconChevronDown />
          ) : (
            <IconChevronUp />
          )
        ) : (
          <div className="chevron-up-down">
            <IconChevronUp />
            <IconChevronDown />
          </div>
        )}
      </Button>
    ),
    cell: (props) => {
      const value = props.getValue();
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      return `${hours !== 0 ? `${hours} Hour ` : ""}${
        minutes !== 0 ? `${minutes} Min ` : ""
      }${seconds} Sec`;
    },
  }),
  columnHelper.accessor("lastModified", {
    header: (
      { column } // Access the column object
    ) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting()} // Toggle sorting
      >
        Last Modification
        {column.getIsSorted() ? (
          column.getIsSorted() === "desc" ? (
            <IconChevronDown />
          ) : (
            <IconChevronUp />
          )
        ) : (
          <div className="chevron-up-down">
            <IconChevronUp />
            <IconChevronDown />
          </div>
        )}
      </Button>
    ),
  }),
];

export const DownloadTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return (
    <div className="download-table">
      <TableRoot>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableColumnHeaderCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableColumnHeaderCell>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <ContextMenuRoot key={row.id}>
                <ContextMenuTrigger>
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </ContextMenuTrigger>
                <ContextMenu />
              </ContextMenuRoot>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableRoot>
      <Flex className="footer" align="center" justify="between">
        <Flex justify="center" align="center" gap="6">
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
          <span>Select All</span>
        </Flex>
        <Flex gap="3">
          <Flex gap="3">
            <Speedometer />
            <span>Speed Test: </span>
          </Flex>
          <Flex gap="3" className="speed">
            <IconDownload />
            <div>
              <span>10.55</span>
              <span>Mbs</span>
            </div>
          </Flex>
          <Flex gap="3" className="speed">
            <IconUpload />
            <div>
              <span>6.30</span>
              <span>Mbs</span>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
