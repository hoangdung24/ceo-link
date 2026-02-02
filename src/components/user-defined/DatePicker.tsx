import { Portal } from "solid-js/web";
import { createMemo, Index, mergeProps } from "solid-js";
import {
  DatePicker as _DatePicker,
  DatePickerContent,
  DatePickerContext,
  DatePickerControl,
  DatePickerInput,
  DatePickerNextTrigger,
  DatePickerPositioner,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerTrigger,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
} from "~/components/ui/date-picker";

import { format } from "date-fns";
import { DatePickerRootProps, useDatePickerContext } from "@ark-ui/solid";

const weekdayLabelObj: Record<string, string> = {
  Monday: "T2",
  Tuesday: "T3",
  Wednesday: "T4",
  Thursday: "T5",
  Friday: "T6",
  Saturday: "T7",
  Sunday: "CN",
};

const monthLabelObj: Record<number, string> = {
  1: "Tháng 1",
  2: "Tháng 2",
  3: "Tháng 3",
  4: "Tháng 4",
  5: "Tháng 5",
  6: "Tháng 6",
  7: "Tháng 7",
  8: "Tháng 8",
  9: "Tháng 9",
  10: "Tháng 10",
  11: "Tháng 11",
  12: "Tháng 12",
};

const DatePicker = (props: DatePickerRootProps) => {
  const _props = mergeProps(
    {
      startOfWeek: 1,
      positioning: {
        placement: "bottom-start",
      },
      format: (e) => {
        const parsedDate = new Date(Date.parse(e.toString()));
        return format(parsedDate, "dd/MM/yyyy");
      },
    } as DatePickerRootProps,
    props
  );

  return (
    <_DatePicker {..._props}>
      <DatePickerControl>
        <DatePickerInput placeholder="Chọn" />
        <DatePickerTrigger />
      </DatePickerControl>
      <Portal>
        <DatePickerPositioner>
          <DatePickerContent>
            <DatePickerView view="day">
              <DatePickerContext>
                {(api) => {
                  return (
                    <>
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerViewTrigger>
                          <CustomDatePickerText />
                        </DatePickerViewTrigger>
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerTable>
                        <DatePickerTableHead>
                          <DatePickerTableRow>
                            <Index each={api().weekDays}>
                              {(weekDay) => {
                                return (
                                  <DatePickerTableHeader>
                                    {weekdayLabelObj[weekDay().long]}
                                  </DatePickerTableHeader>
                                );
                              }}
                            </Index>
                          </DatePickerTableRow>
                        </DatePickerTableHead>
                        <DatePickerTableBody>
                          <Index each={api().weeks}>
                            {(week) => (
                              <DatePickerTableRow>
                                <Index each={week()}>
                                  {(day) => (
                                    <DatePickerTableCell value={day()}>
                                      <DatePickerTableCellTrigger>
                                        {day().day}
                                      </DatePickerTableCellTrigger>
                                    </DatePickerTableCell>
                                  )}
                                </Index>
                              </DatePickerTableRow>
                            )}
                          </Index>
                        </DatePickerTableBody>
                      </DatePickerTable>
                    </>
                  );
                }}
              </DatePickerContext>
            </DatePickerView>
            <DatePickerView view="month">
              <DatePickerContext>
                {(api) => {
                  return (
                    <>
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerViewTrigger>
                          <CustomDatePickerText />
                        </DatePickerViewTrigger>
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerTable>
                        <DatePickerTableBody>
                          <Index
                            each={api().getMonthsGrid({ columns: 4, format: "short" })}
                          >
                            {(months) => {
                              return (
                                <DatePickerTableRow>
                                  <Index each={months()}>
                                    {(month) => {
                                      return (
                                        <DatePickerTableCell value={month().value}>
                                          <DatePickerTableCellTrigger class="px-2 py-1">
                                            {monthLabelObj[month().value]}
                                          </DatePickerTableCellTrigger>
                                        </DatePickerTableCell>
                                      );
                                    }}
                                  </Index>
                                </DatePickerTableRow>
                              );
                            }}
                          </Index>
                        </DatePickerTableBody>
                      </DatePickerTable>
                    </>
                  );
                }}
              </DatePickerContext>
            </DatePickerView>
            <DatePickerView view="year">
              <DatePickerContext>
                {(api) => {
                  return (
                    <>
                      <DatePickerViewControl>
                        <DatePickerPrevTrigger />
                        <DatePickerViewTrigger>
                          <CustomDatePickerText />
                        </DatePickerViewTrigger>
                        <DatePickerNextTrigger />
                      </DatePickerViewControl>
                      <DatePickerTable>
                        <DatePickerTableBody>
                          <Index each={api().getYearsGrid({ columns: 4 })}>
                            {(years) => (
                              <DatePickerTableRow>
                                <Index each={years()}>
                                  {(year) => (
                                    <DatePickerTableCell value={year().value}>
                                      <DatePickerTableCellTrigger>
                                        {year().label}
                                      </DatePickerTableCellTrigger>
                                    </DatePickerTableCell>
                                  )}
                                </Index>
                              </DatePickerTableRow>
                            )}
                          </Index>
                        </DatePickerTableBody>
                      </DatePickerTable>
                    </>
                  );
                }}
              </DatePickerContext>
            </DatePickerView>
          </DatePickerContent>
        </DatePickerPositioner>
      </Portal>
    </_DatePicker>
  );
};

const CustomDatePickerText = () => {
  const api = useDatePickerContext();

  const label = createMemo(() => {
    const { year, month } = api().visibleRange.start;
    return `${month.toString().padStart(2, "0")}/${year}`;
  });

  return <span class="text-sm font-medium">{label()}</span>;
};

export default DatePicker;
