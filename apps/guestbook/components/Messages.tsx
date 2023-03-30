import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Guestbook } from "types";
import useApi from "../lib/useApi";
dayjs.extend(relativeTime);

export default function Messages() {
  const { data: messages } = useApi<Guestbook[]>("/guestbook");
  return (
    <section>
      {messages
        ? messages
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((message) => {
              return (
                <div className='mx-auto max-w-2xl  py-2' key={message.id}>
                  <section className='rounded-lg bg-gray-100 dark:bg-transparent border dark:border-gray-800 p-4'>
                    <div className='flex gap-4'>
                      <div className='flex-shrink-0'>
                        {message.image && message.image.startsWith("http") && (
                          <Image
                            src={message.image}
                            width={40}
                            height={40}
                            className=' w-full aspect-square rounded-full object-cover'
                            alt={message.name}
                          ></Image>
                        )}
                      </div>
                      <blockquote className='flex-auto'>
                        <p className='text-sm text-gray-500 dark:text-white font-sans'>
                          <strong>{message.name}</strong> ·{" "}
                          <span>{`${dayjs(message.date).fromNow()}`}</span>
                        </p>
                        <p className='text-sm text-gray-800 dark:text-white font-normal break-words font-sans sm:text-base mt-1'>
                          {message.message}
                        </p>
                      </blockquote>
                    </div>
                  </section>
                </div>
              );
            })
        : null}
    </section>
  );
}
