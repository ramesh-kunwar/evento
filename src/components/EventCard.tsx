import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};
const EventCard = ({ event }: EventCardProps) => {
  return (
    <section className="h-[380px] max-w-[500px] flex-1 basis-80  bg-white/[3%]  overflow-hidden ">
      <Image
        src={event?.imageUrl}
        alt={event?.name}
        width={500}
        height={280}
        className="h-[60%] object-fit rounded-xl"
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <h2 className="text-2xl font-semibold mt-4">{event?.name}</h2>
        <p className="italic text-white/75">{event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
    </section>
  );
};

export default EventCard;
