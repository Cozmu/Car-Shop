import InvalidFieldsError from '../errors/invalide-fields-error';

class ValidateCategoryMotorcycle {
  checkCategory = (category:string):void => {
    if (category !== 'Street' && category !== 'Custom' && category !== 'Trail') {
      throw new InvalidFieldsError(
        'Invalid value for category field. Try: \'Street\', \'Custom\', \'Trail\'',
      );
    }
  };
}

export default ValidateCategoryMotorcycle;