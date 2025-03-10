import React from 'react';

import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiCopy,
  EuiCodeBlock,
  EuiSpacer,
} from '../../../../src/components';

export const iconTypes = [
  'accessibility',
  'aggregate',
  'alert',
  'analyzeEvent',
  'annotation',
  'apmTrace',
  'apps',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'arrowStart',
  'arrowEnd',
  'asterisk',
  'beaker',
  'bell',
  'bellSlash',
  'beta',
  'bolt',
  'boxesHorizontal',
  'boxesVertical',
  'branch',
  'branchUser',
  'broom',
  'brush',
  'bug',
  'bullseye',
  'calendar',
  'check',
  'checkInCircleFilled',
  'cheer',
  'clock',
  'cloudDrizzle',
  'cloudStormy',
  'cloudSunny',
  'cluster',
  'color',
  'compute',
  'console',
  'container',
  'continuityAbove',
  'continuityAboveBelow',
  'continuityBelow',
  'continuityWithin',
  'controlsHorizontal',
  'controlsVertical',
  'copy',
  'copyClipboard',
  'cross',
  'crosshairs',
  'crossInACircleFilled',
  'currency',
  'cut',
  'database',
  'desktop',
  'document',
  'documents',
  'documentEdit',
  'documentation',
  'dot',
  'doubleArrowLeft',
  'doubleArrowRight',
  'download',
  'email',
  'empty',
  'eql',
  'eraser',
  'exit',
  'expand',
  'expandMini',
  'exportAction',
  'eye',
  'eyeClosed',
  'faceHappy',
  'faceNeutral',
  'faceSad',
  'filter',
  'flag',
  'fold',
  'folderCheck',
  'folderClosed',
  'folderExclamation',
  'folderOpen',
  'frameNext',
  'framePrevious',
  'fullScreen',
  'fullScreenExit',
  'function',
  'gear',
  'glasses',
  'globe',
  'grab',
  'grabHorizontal',
  'grid',
  'heart',
  'heatmap',
  'help',
  'home',
  'iInCircle',
  'image',
  'importAction',
  'indexClose',
  'indexEdit',
  'indexFlush',
  'indexMapping',
  'indexOpen',
  'indexRuntime',
  'indexSettings',
  'inputOutput',
  'inspect',
  'invert',
  'ip',
  'keyboard',
  'kqlField',
  'kqlFunction',
  'kqlOperand',
  'kqlSelector',
  'kqlValue',
  'kubernetesNode',
  'kubernetesPod',
  'launch',
  'layers',
  'lettering',
  'lineDashed',
  'lineDotted',
  'lineSolid',
  'link',
  'list',
  'listAdd',
  'lock',
  'lockOpen',
  'logstashFilter',
  'logstashIf',
  'logstashInput',
  'logstashOutput',
  'logstashQueue',
  'magnifyWithExclamation',
  'magnifyWithMinus',
  'magnifyWithPlus',
  'magnet',
  'mapMarker',
  'memory',
  'merge',
  'menu',
  'menuDown',
  'menuLeft',
  'menuRight',
  'menuUp',
  'minimize',
  'minus',
  'minusInCircle',
  'minusInCircleFilled',
  'mobile',
  'moon',
  'namespace',
  'nested',
  'node',
  'number',
  'offline',
  'online',
  'package',
  'pageSelect',
  'pagesSelect',
  'paperClip',
  'partial',
  'pause',
  'payment',
  'pencil',
  'percent',
  'pin',
  'pinFilled',
  'play',
  'playFilled',
  'plus',
  'plusInCircle',
  'plusInCircleFilled',
  'popout',
  'push',
  'questionInCircle',
  'quote',
  'refresh',
  'reporter',
  'returnKey',
  'save',
  'scale',
  'search',
  'securitySignal',
  'securitySignalDetected',
  'securitySignalResolved',
  'sessionViewer',
  'shard',
  'share',
  'snowflake',
  'sortable',
  'sortDown',
  'sortLeft',
  'sortRight',
  'sortUp',
  'spaces',
  'starEmpty',
  'starEmptySpace',
  'starFilled',
  'starFilledSpace',
  'starMinusEmpty',
  'starMinusFilled',
  'starPlusEmpty',
  'starPlusFilled',
  'stats',
  'stop',
  'stopFilled',
  'stopSlash',
  'storage',
  'string',
  'submodule',
  'sun',
  'symlink',
  'tableOfContents',
  'tableDensityExpanded',
  'tableDensityCompact',
  'tableDensityNormal',
  'tag',
  'tear',
  'temperature',
  'timeline',
  'timeRefresh',
  'timeslider',
  'training',
  'trash',
  'unfold',
  'unlink',
  'user',
  'userAvatar',
  'users',
  'vector',
  'videoPlayer',
  'visArea',
  'visAreaStacked',
  'visBarHorizontal',
  'visBarHorizontalStacked',
  'visBarVertical',
  'visBarVerticalStacked',
  'visGauge',
  'visGoal',
  'visLine',
  'visMapCoordinate',
  'visMapRegion',
  'visMetric',
  'visPie',
  'visTable',
  'visTagCloud',
  'visText',
  'visTimelion',
  'visVega',
  'visVisualBuilder',
  'wordWrap',
  'wordWrapDisabled',
  'wrench',
];

export default () => (
  <>
    <EuiCodeBlock language="html" isCopyable paddingSize="m">
      {'<EuiIcon type="alert" />'}
    </EuiCodeBlock>
    <EuiSpacer />
    <EuiFlexGrid direction="column" columns={3}>
      {iconTypes.map((iconType) => (
        <EuiFlexItem key={iconType}>
          <EuiCopy
            display="block"
            textToCopy={iconType}
            afterMessage={`${iconType} copied`}
          >
            {(copy) => (
              <EuiPanel
                hasShadow={false}
                hasBorder={false}
                onClick={copy}
                paddingSize="s"
              >
                <EuiIcon className="eui-alignMiddle" type={iconType} /> &emsp;{' '}
                <small>{iconType}</small>
              </EuiPanel>
            )}
          </EuiCopy>
        </EuiFlexItem>
      ))}
    </EuiFlexGrid>
  </>
);
