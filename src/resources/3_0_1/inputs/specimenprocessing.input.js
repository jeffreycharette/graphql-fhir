const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Specimenprocessing Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Specimenprocessing_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'Textual description of procedure.',
		},
		description: {
			type: GraphQLString,
			description: 'Textual description of procedure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/specimen-processing-procedure
		procedure: {
			type: require('./codeableconcept.input.js'),
			description:
				'A coded value specifying the procedure used to process the specimen.',
		},
		additive: {
			type: new GraphQLList(GraphQLString),
			description: 'Material used in the processing step.',
		},
		_timeDateTime: {
			type: require('./element.input.js'),
			description:
				'A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.',
		},
		timeDateTime: {
			type: DateTimeScalar,
			description:
				'A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.',
		},
		timePeriod: {
			type: require('./period.input.js'),
			description:
				'A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.',
		},
	}),
});
