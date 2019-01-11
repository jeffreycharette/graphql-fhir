const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Range Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Range_Input',
	description: 'Base StructureDefinition for Range Type',
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
		low: {
			type: require('./quantity.input.js'),
			description: 'The low limit. The boundary is inclusive.',
		},
		high: {
			type: require('./quantity.input.js'),
			description: 'The high limit. The boundary is inclusive.',
		},
	}),
});
