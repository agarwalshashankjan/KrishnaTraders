import {round} from 'lodash';

export const dataUpdate = (prop, value) => {
  return {
    type: 'data_update',
    payload: {prop, value},
  };
};

export const dataCalculate = ({
  unitMasala,
  unitTobacoo,
  rateMasala,
  rateTobacoo,
  GSTRate,
}) => {

  const amtMasala = unitMasala * rateMasala;
  const amtTobacoo = unitTobacoo * rateTobacoo;
  const accessibleValue = amtTobacoo + amtMasala;
  const GST = parseFloat((accessibleValue * GSTRate * 0.01).toFixed(2));
  const totalTax = GST;
  const cess60 = parseFloat((amtMasala * 0.6).toFixed(2));
  const cess160 = parseFloat((amtTobacoo * 1.6).toFixed(2));
  const Gross = round(accessibleValue + totalTax + cess160 + cess60);
  const roundOff = Gross - (accessibleValue + totalTax + cess160 + cess60);

  return {
    type: 'data_calculate',
    payload: {
      amtMasala,
      amtTobacoo,
      accessibleValue,
      GST,
      totalTax,
      cess60,
      cess160,
      Gross,
      roundOff: parseFloat(roundOff.toFixed(2)),
    },
  };
};
