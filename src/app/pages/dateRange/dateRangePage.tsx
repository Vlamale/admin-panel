import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ValidationMode } from "react-hook-form";
import { Form } from "app/components";
import { Consts } from "./duck";

const DateRangePage: React.FC = () => {
  const formConfig: { mode: keyof ValidationMode } = React.useMemo(
    () => ({
      mode: "onChange",
    }),
    []
  );

  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexGrow="1"
    >
      <Box boxShadow="xl" p="10" w="18em">
        <Box textAlign="center" mb="7">
          <Heading fontSize="3xl" fontWeight="normal">
            Date range
          </Heading>
        </Box>

        <Form
          formConfig={formConfig}
          validationSchema={Consts.dateRangeFormSchema}
        >
          <Form.DateRangeInput
            name="dateRange"
            minDate={new Date(Date.now() - 3600 * 1000 * 24 * 6)}
            startLabel="From:"
            endLabel="To:"
          />
        </Form>
      </Box>
    </Box>
  );
};

export default DateRangePage;
