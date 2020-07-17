import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const PaymentDetailPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Payment Detail");

  const classes = useStyles();

  const [values, setValues] = React.useState({
    age: "",
    name: "hai",
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current);
  }, []);

  const handleChange = (name) => (event) => {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <div className="col-lg-12">
        <div className={`card card-custom card-stretch gutter-b`}>
          <div class="card-header">
            <div class="card-title">
              <h3 className="card-label">Payments</h3>
            </div>
          </div>
          <div class="card-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-simple">
                        Select Period
                      </InputLabel>
                      <Select
                        value={values.age}
                        onChange={handleChange}
                        inputProps={{
                          name: "Current",
                          id: "age-simple",
                        }}
                      >
                        <MenuItem value={10}>Upcoming</MenuItem>
                        <MenuItem value={20}>Past</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div class="container">
                    <div class="row">
                      <div className="col-lg-6">
                        <h3>All Balances</h3>
                      </div>
                      <div className="col-lg-6">
                        <h3>Out Standing</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
