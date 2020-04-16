// Copyright 2018-2020, University of Colorado Boulder

/**
 * The sole scene in the 'Two Variables' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerColors from '../../../../equality-explorer/js/common/EqualityExplorerColors.js';
import EqualityExplorerConstants from '../../../../equality-explorer/js/common/EqualityExplorerConstants.js';
import ConstantTermCreator from '../../../../equality-explorer/js/common/model/ConstantTermCreator.js';
import EqualityExplorerScene from '../../../../equality-explorer/js/common/model/EqualityExplorerScene.js';
import Variable from '../../../../equality-explorer/js/common/model/Variable.js';
import VariableTermCreator from '../../../../equality-explorer/js/common/model/VariableTermCreator.js';
import equalityExplorerStrings from '../../../../equality-explorer/js/equalityExplorerStrings.js';
import equalityExplorerTwoVariables from '../../equalityExplorerTwoVariables.js';
import equalityExplorerTwoVariablesStrings from '../../equalityExplorerTwoVariablesStrings.js';

class TwoVariablesScene extends EqualityExplorerScene {

  constructor() {

    const variableOptions = {
      range: EqualityExplorerConstants.VARIABLE_RANGE
    };
    const xVariable = new Variable( equalityExplorerStrings.x, variableOptions );
    const yVariable = new Variable( equalityExplorerTwoVariablesStrings.y, variableOptions );

    super(
      createTermCreators( xVariable, yVariable ),
      createTermCreators( xVariable, yVariable ), {
        debugName: 'twoVariables',
        variables: [ xVariable, yVariable ],
        numberOfSnapshots: 4
      } );
  }
}

/**
 * Creates the term creators for this scene.
 * @param {Variable} xVariable
 * @param {Variable} yVariable
 * @returns {TermCreator[]}
 */
function createTermCreators( xVariable, yVariable ) {

  return [

    // x & -x
    new VariableTermCreator( xVariable ),

    // y & -y
    new VariableTermCreator( yVariable, {
      positiveFill: EqualityExplorerColors.POSITIVE_Y_FILL,
      negativeFill: EqualityExplorerColors.NEGATIVE_Y_FILL
    } ),

    new ConstantTermCreator()
  ];
}

equalityExplorerTwoVariables.register( 'TwoVariablesScene', TwoVariablesScene );

export default TwoVariablesScene;