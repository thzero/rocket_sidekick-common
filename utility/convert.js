// convert-units
// convert-units// import configureMeasurements from 'convert-units';
// import allMeasures from 'convert-units/definitions/all';
//const convert = configureMeasurements(allMeasures);

// convert
import convert from 'convert';

class ConvertUtility {
	static MeasurementConversionKey = 'Metric';

	static generateGamerTagSearch(gamerTag) {
		return gamerTag ? gamerTag.replace(/ /g, '').toLowerCase() : null;
	}

	static round(value, decimals) {
		decimals = decimals ?? 2;
		value = Number(value);
		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	} 

	static convert2(value, from, to) {
		// convert-units
		// return convert2(value).from(from).to(to);
		// convert
		return convert(value, from).to(to);
	}

	static convertMeasurement(correlationId, value, unitId, type) {
		if (!value)
			return null;
		if (!unitId)
			return null;
		if (!type)
			return null;

		value = Number(value);

		if (type.toLowerCase().indexOf('acceleration') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm/s2'));
		if (type.toLowerCase().indexOf('altitude') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm'));
		if (type.toLowerCase().indexOf('area') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm2'));
		if (type.toLowerCase().indexOf('diameter') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('dimension') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('distance') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm'));
		if (type.toLowerCase().indexOf('length') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('temperature') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'C'));
		if (type.toLowerCase().indexOf('velocity') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm/s'));
		if (type.toLowerCase().indexOf('volume') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'mm3'));
		if (type.toLowerCase().indexOf('weight') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'kg'));
		
		if (type.toLowerCase().indexOf('ceiling') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm'));
		if (type.toLowerCase().indexOf('cgFrom') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('diameter') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('dimension') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('windSpeed') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm/s'));

		return null;
	}

	static convertMeasurementPart(correlationId, value, unitId, type) {
		if (!value)
			return null;
		if (!unitId)
			return null;
		if (!type)
			return null;

		value = Number(value);

		if (type.toLowerCase().indexOf('diameter') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('dimension') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('length') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (type.toLowerCase().indexOf('weight') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'kg'));

		return null;
	}

	static convertMeasurementsForComparison(correlationId, item) {
		if (!item)
			return;

		let value;
		let unitId;
		for (let property of Object.getOwnPropertyNames(item)) {
			if (!property.toLowerCase().endsWith('unitid'))
				continue;

			unitId = item[property];
			property = property.replace('UnitId', '');
			value = item[property];
			if (!value)
				continue;

			if (property.toLowerCase().indexOf('acceleration') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm/s2'));
			else if (property.toLowerCase().indexOf('altitude') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm'));
			else if (property.toLowerCase().indexOf('area') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm2'));
			else if (property.toLowerCase().indexOf('distance') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm'));
			else if (property.toLowerCase().indexOf('length') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
			else if (property.toLowerCase().indexOf('temperature') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'C'));
			else if (property.toLowerCase().indexOf('velocity') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm/s'));
			else if (property.toLowerCase().indexOf('volume') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'mm3'));
			else if (property.toLowerCase().indexOf('weight') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'kg'));
				
			else if (property.toLowerCase().indexOf('ceiling') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm'));
			else if (property.toLowerCase().indexOf('cgFrom') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
			else if (property.toLowerCase().indexOf('cpFrom') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
			else if (property.toLowerCase().indexOf('diameter') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
			else if (property.toLowerCase().indexOf('dimension') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
			else if (property.toLowerCase().indexOf('windSpeed') > -1)
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'm/s'));
		}
	}

	static convertMeasurementsForComparisonPart(correlationId, item) {
		if (!item)
			return false;

		let updated = false;
		let value;
		let unitId;
		for (let property of Object.getOwnPropertyNames(item)) {
			if (!property.toLowerCase().endsWith('unitid'))
				continue;

			unitId = item[property];
			property = property.replace('MeasurementUnitId', '');
			value = item[property];
			if (!value)
				continue;

			if (property.toLowerCase().indexOf('diameter') > -1) {
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
				updated = true;
			}
			else if (property.toLowerCase().indexOf('dimension') > -1) {
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
				updated = true;
			}
			else if (property.toLowerCase().indexOf('length') > -1) {
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
				updated = true;
			}
			else if (property.toLowerCase().indexOf('weight') > -1) {
				item[property + ConvertUtility.MeasurementConversionKey] = ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'kg'));
				updated = true;
			}
		}

		return updated;
	}

	static convertMeasurementsForComparisonPartByProperty(correlationId, item, property) {
		if (!item)
			return null;

		let unitId = item[property + 'MeasurementUnitId'];
		let value = item[property];
		if (!value)
			return null;

		if (property.toLowerCase().indexOf('diameter') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (property.toLowerCase().indexOf('dimension') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (property.toLowerCase().indexOf('length') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'cm'));
		if (property.toLowerCase().indexOf('weight') > -1)
			return ConvertUtility.round(ConvertUtility.convert2(value, unitId, 'kg'));

		return null;
	}
}

export default ConvertUtility;
