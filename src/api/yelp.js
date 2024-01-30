import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 65W5eU34rxL_6pg0n7dqYZ0e6qa75mDUvkddIxRncP4h1REYjmSHC2qOtAsEAMhSao2K3cy4DVfl5IODC1tOTwhgBPwjubp8BcQcb3IjlDGLVqFjBNlY3fe8fRe5ZXYx",
  },
});
