'use client'
import React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { Button } from "./ui/button";

type Props = {
  url: string;
};

export const CopyCmp = ({ url }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      if (setCopied) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }
    } catch (err) {
      alert("Failed to copy");
    }
  };

  return (
    <div className="flex items-center gap-2 outline-none mt-6">
      <Input placeholder="Image URL" value={url} readOnly  className="focus-visible:ring-0 outline-none"/>
      <Button size={"icon"} className="text-xl" onClick={copyToClipboard}>
        {copied ? <IoCheckmarkDoneSharp /> : <MdContentCopy />}
      </Button>
    </div>
  );
};
