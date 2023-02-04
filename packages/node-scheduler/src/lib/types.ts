type ObjectValues<T> = T[keyof T];

const SCHEDULING_TYPES = {
  date: 'date',
  interval: 'interval',
} as const;

type SchedulingTypes = ObjectValues<typeof SCHEDULING_TYPES>;

type Scheduling<T extends SchedulingTypes> = {
  type: T;
  uuid: string;
};

type DateScheduling = Scheduling<'date'> & {
  dates: number[];
};

type IntervalScheduling = Scheduling<'interval'> & {
  startingDate: number;
  repeat?: number;
  interval: number;
};

export { SCHEDULING_TYPES };
export { DateScheduling, IntervalScheduling };
