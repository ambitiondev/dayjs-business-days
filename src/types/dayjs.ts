import 'dayjs';
import { Dayjs as _Dayjs } from 'dayjs';

declare module 'dayjs' {
    interface Dayjs {
        businessDaysAdd(days: number): _Dayjs;
        businessDaysSubtract(days: number): _Dayjs;
        businessDiff(input: _Dayjs): number;

        businessDaysInMonth(): _Dayjs[];
        businessWeeksInMonth(): _Dayjs[][];

        isBusinessDay(): boolean;
        isHoliday(): boolean;

        nextBusinessDay(): _Dayjs;
        prevBusinessDay(): _Dayjs;
    }
}

export {};
