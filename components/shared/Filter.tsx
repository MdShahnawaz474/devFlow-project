"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { SelectGroup } from '@radix-ui/react-select';
  

interface Props{
    filters :{
        name:string,
        value : string,
    }[];
    otherClasses?:string
    containerClasses:string
}
const Filter = ({
    filters,
    otherClasses,
    containerClasses
}:Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
        <Select>
  <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 `}>
    <SelectValue placeholder="Select a Filter" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
        {filters.map((item)=>(
            <SelectItem key={item.value} value={item.value}>
                {item.name}
            </SelectItem>
        ))}
    </SelectGroup>
  </SelectContent>
</Select>
    </div>
  )
}

export default Filter