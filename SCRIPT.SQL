CREATE TABLE public.products (
	name varchar NOT NULL,
	price numeric NULL,
	description varchar NULL,
	id SERIAL NOT NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
);

INSERT INTO public.products ("name",price,description) VALUES
	 ('Product1',100,'Un producto cualquiera'),
	 ('Product2',200,'Un producto cualquiera'),
	 ('Product3',300,'Un producto cualquiera');
