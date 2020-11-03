const INITIAL_STATE = {
  date: '',
  unitMasala: '',
  unitTobacoo: '',
  rateMasala: '',
  rateTobacoo: '',
  amtMasala: '',
  amtTobacoo: '',
  GSTRate: '',
  accessibleValue: '',
  GST: '',
  totalTax: '',
  cess60: '',
  cess160: '',
  roundOff: '',
  Gross: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'data_update':
      return {...state, [action.payload.prop]: action.payload.value};
    case 'data_calculate':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
