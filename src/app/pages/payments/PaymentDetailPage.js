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
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

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
          <div className="card-header">
            <div className="card-title">
              <h3 className="card-label">Payments</h3>
            </div>
          </div>
          <div className="card-body">
            {/*}<div className="container">
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
                  <div className="container">
                    <div className="row">
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
            </div>{*/}
						{/*}<div className="card card-custom overflow-hidden">
							<div className="card-body p-0">
								<div className="justify-content-center mt-5 mb-5">
									<div className="mr-5 ml-5">
										<div className="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
											<h1 className="display-4 font-weight-boldest mb-10">3302 Villa Dr, 1 Unit</h1>
											<div className="d-flex flex-column align-items-md-end px-0">
												<a href="#" className="mb-5">
													<img src={toAbsoluteUrl("/media/logos/logo-dark.png")} />
												</a>
												<span className="d-flex flex-column align-items-md-end opacity-70">
													<span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>
													<span>Mississippi 96522</span>
												</span>
											</div>
										</div>
										<div className="d-flex justify-content-between pt-6">
											<div className="d-flex flex-column flex-root">
												<span className="font-weight-bolder mb-2">Current Balance</span>
												<span className="opacity-70">Dec 12, 2017</span>
											</div>
											<div className="d-flex flex-column flex-root">
												<span className="font-weight-bolder mb-2">INVOICE NO.</span>
												<span className="opacity-70">GS 000014</span>
											</div>
											<div className="d-flex flex-column flex-root">
												<span className="font-weight-bolder mb-2">INVOICE TO.</span>
												<span className="opacity-70">Iris Watson, P.O. Box 283 8562 Fusce RD.
												<br />Fredrick Nebraska 20620</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>{*/}
            <div className="row justify-content-center">
              <div className="col-md-12">
                {/*}<div className="d-flex justify-content-between pb-1 pb-md-1 flex-column flex-md-row">
                  <h1 className="mb-2 font-weight-light font-size-h1">PAYMENTS</h1>
                </div>{*/}
                <div className="d-flex justify-content-between pb-15">
                  <div className="d-flex flex-column flex-root">
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Current and Upcoming
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mt-3 text-uppercase">ALL BALANCES</span>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mt-3 text-uppercase">OUT STANDING</span>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <div className="input-group input-group input-group-solid">
                      <input type="text" className="form-control pl-4" placeholder="Search..." />
                      <div className="input-group-append">
                        <span className="input-group-text pr-3">
                          <span className="svg-icon svg-icon-lg">
                            {/*}<SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")} />{*/}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border p-6">
                  <div className="d-flex justify-content-between mb-5">
                    <div className="d-flex flex-column flex-root">
                      <h4 className="font-size-h1 d-block d-block font-weight-normal mb-7 text-dark-50">3302 Villa Dr, 1 Unit</h4>
                    </div>

                    <div className="d-flex flex-column flex-root align-items-md-end mt-4">
                      <span className="opacity-70 font-size-sm font-weight-light">13 aug 2018 - No End Date
                      <span className="label label-light-primary font-weight-bold label-inline ml-3">Upcoming</span></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">Current Balance</span>
                      <span className="opacity-70 font-size-h6">$100</span>
                    </div>
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">Rent</span>
                      <span className="opacity-70 font-size-h6">$500</span>
                    </div>
                    <div className="d-flex flex-column flex-root">
                      <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">Tenants</span>
                      <span className="opacity-70 font-size-h6">Jerry Metahadi</span>
                    </div>
                  </div>
                </div>
                <div className="border p-6">
                    <div className="d-flex justify-content-between mb-15">
                      <div className="d-flex flex-column flex-root">
                        <span className="font-weight-bold mb-2 font-size-h6 text-dark-50">Past 30 days of payments</span>
                        <span className="opacity-70 font-size-sm">Recent payments</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex mt-3">
                        <span className="font-weight-bold mb-2 font-size-md text-dark-50 mr-2">Rentals</span> |
                        <span className="font-weight-bold mb-2 font-size-md text-dark-50 mr-2 ml-2">Tenants</span> |
                        <span className="font-weight-bold mb-2 font-size-md text-dark-50 ml-2">History</span>
                      </div>
                      <div className="d-flex">
                        <button type="button" className="btn btn-light-primary font-weight-bold">All Transactions</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
