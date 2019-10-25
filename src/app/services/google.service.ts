import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyByL9R3b8I6UT2Gc2oyOJj9rdA8bhNc4jU");

class Google {
  public getAddress(address: any): Promise<any> {
    return Geocoder.from(address)
      .then((res: any) => {
        return res
      })
      .catch((error:any) => {
        console.log(error)
      });
  };
};

export default new Google();