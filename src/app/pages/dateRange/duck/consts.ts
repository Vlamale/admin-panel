import * as yup from "yup";

export const dateRangeFormSchema = yup.object().shape({
  dateRange: yup.object().shape({
    startDate: yup.date(),
    endDate: yup.date().when("startDate", (startDate, schema) => {
      if (startDate) {
        return schema.test(
          "compare dates",
          "The end date must be greater than the beginning date",
          (val: any) => new Date(val) > new Date(startDate)
        );
      }
      return schema;
    }),
  }),
});
