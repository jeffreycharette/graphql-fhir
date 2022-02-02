const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary ElementDefinitionbinding Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ElementDefinitionbinding',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_strength: {
			type: require('./element.schema.js'),
			description:
				'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/binding-strength
		strength: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'Describes the intended use of this particular set of codes.',
		},
		description: {
			type: GraphQLString,
			description:
				'Describes the intended use of this particular set of codes.',
		},
		_valueSetUri: {
			type: require('./element.schema.js'),
			description:
				'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
		},
		valueSetUri: {
			type: UriScalar,
			description:
				'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
		},
		valueSetReference: {
			type: new GraphQLUnionType({
				name: 'ElementDefinitionbindingvalueSetReference_valueSetReference_Union',
				description:
					'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
				types: () => [require('./valueset.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ValueSet') {
						return require('./valueset.schema.js');
					}
				},
			}),
			description:
				'Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.',
		},
	}),
});
