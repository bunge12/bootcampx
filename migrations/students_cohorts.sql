CREATE TABLE cohorts (
  id SERIAL primary key not null,
  name varchar(255) not null,
  start_date date,
  end_date date
);

CREATE TABLE students (
  id serial primary key not null,
  name varchar(255) not null,
  email varchar(255),
  phone varchar(32),
  github varchar(255),
  start_date date,
  end_date date,
  cohort_id integer references cohorts(id) on delete cascade
);