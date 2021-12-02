# test1

npm install

СУБД на базе SQL (PostgreSQL)
### Необходимо создать таблицу:
CREATE TABLE public.queue
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    name character varying(36) NOT NULL,
    surname character varying(36) NOT NULL,
    "timestamp" timestamp with time zone DEFAULT now(),
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.queue
    OWNER to postgres;
    
В db.js при изменить параметры.
