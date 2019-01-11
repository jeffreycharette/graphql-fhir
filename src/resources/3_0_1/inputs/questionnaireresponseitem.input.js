const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireResponseitem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponseitem_Input',
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
		_linkId: {
			type: require('./element.input.js'),
			description:
				'The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.',
		},
		linkId: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.',
		},
		_definition: {
			type: require('./element.input.js'),
			description:
				'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.',
		},
		definition: {
			type: UriScalar,
			description:
				'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.',
		},
		_text: {
			type: require('./element.input.js'),
			description:
				'Text that is displayed above the contents of the group or as the text of the question being answered.',
		},
		text: {
			type: GraphQLString,
			description:
				'Text that is displayed above the contents of the group or as the text of the question being answered.',
		},
		subject: {
			type: GraphQLString,
			description:
				"More specific subject this section's answers are about, details the subject given in QuestionnaireResponse.",
		},
		answer: {
			type: new GraphQLList(
				require('./questionnaireresponseitemanswer.input.js'),
			),
			description: "The respondent's answer(s) to the question.",
		},
	}),
});
