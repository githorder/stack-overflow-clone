import Link from "next/link";
import React from "react";

import { Badge } from "@/components/ui/badge";

interface Props {
  name: string;
  showCount?: boolean;
  _id: string;
  totalVal?: string;
}

export default function Tag({ name, totalVal, showCount, _id }: Props) {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex justify-between items-center gap-2"
    >
      <Badge className="subtle-medium background-light800_dark300 rounded-md text-light400_light500 uppercase py-2 px-4 border-none">
        {name}
      </Badge>

      {showCount ? (
        <span className="small-medium text-dark500_light700">{totalVal}</span>
      ) : null}
    </Link>
  );
}
