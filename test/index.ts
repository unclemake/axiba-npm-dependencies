
import npmDependent from '../src/index'
import { describe, describeClass, its, run, it, itAdd, itClass } from 'axiba-unit-test';
import Vinyl = require('vinyl');

describeClass('测试', npmDependent, () => {

    // itClass('getPackage', () => {
    //     itAdd(['react'], value => value.name === 'react');
    // });


    // itClass('get', () => {
    //     // itAdd(['object-assign'], value => {
    //     //     return value.name == 'object-assign';
    //     // });

    //     itAdd(['react'], value => {
    //         return true;
    //     });
    // });

    // itClass('getFile', () => {
    // itAdd(['object-assign'], value => {
    //     return value.name == 'object-assign';
    // });

    //     itAdd(['react'], value => {
    //         return false;
    //     }, 7000);
    // });

    // itClass('fileReplace', () => {
    //     let js = new Vinyl({
    //         cwd: '/',
    //         base: '/test/',
    //         path: '/test/file.js',
    //         contents: new Buffer('')
    //     });

    //     let depObj = {
    //         dependencies: [{
    //             name: 'gulp',
    //             path: 'node_modules/gulp',
    //             main: 'gulp.js',
    //         }]
    //     }

    //     itAdd(['require\("gulp");require\("gulp/ksss.js");', /require\(["'](.+?)['"]/g, 1, depObj], value => {
    //         return value == 'require("node_modules/gulp/gulp.js");require("node_modules/gulp/ksss.js");';
    //     }, 7000);
    // });


    // itClass('getFileStream', () => {
    //     itAdd(['antd'], value => {
    //         return true;
    //     }, 9999999);
    // });



    itClass('getModulesDep', () => {
        itAdd([{
            "name": "antd",
            "path": "node_modules/antd",
            "isBase": true,
            "main": "dist/antd.js",
            "fileArray": [
                "react",
                "react-dom",
                "ReactComponentWithPureRenderMixin",
                "UnicodeBidiService",
                "createArrayFromMixed",
                "node_modules/antd/dist/antd.js"
            ],
            "dependencies": [
                {
                    "name": "array-tree-filter",
                    "path": "node_modules/array-tree-filter",
                    "isBase": true,
                    "main": "index.js",
                    "fileArray": [
                        "node_modules/array-tree-filter/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "babel-runtime",
                    "path": "node_modules/babel-runtime",
                    "isBase": true,
                    "main": "index.js",
                    "fileArray": [
                        "node_modules/babel-runtime/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "classnames",
                    "path": "node_modules/classnames",
                    "isBase": true,
                    "main": "index.js",
                    "fileArray": [
                        "node_modules/classnames/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "css-animation",
                    "path": "node_modules/css-animation",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/css-animation/lib/Event.js",
                        "component-classes",
                        "node_modules/css-animation/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "gregorian-calendar",
                    "path": "node_modules/gregorian-calendar",
                    "isBase": true,
                    "main": "lib/gregorian-calendar.js",
                    "fileArray": [
                        "node_modules/gregorian-calendar/lib/utils.js",
                        "node_modules/gregorian-calendar/lib/locale/en_US.js",
                        "node_modules/gregorian-calendar/lib/const.js",
                        "node_modules/gregorian-calendar/lib/gregorian-calendar.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "gregorian-calendar-format",
                    "path": "node_modules/gregorian-calendar-format",
                    "isBase": true,
                    "main": "./lib/gregorian-calendar-format.js",
                    "fileArray": [
                        "gregorian-calendar",
                        "node_modules/gregorian-calendar-format/lib/locale/en_US.js",
                        "warning",
                        "node_modules/gregorian-calendar-format/lib/gregorian-calendar-format.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "moment",
                    "path": "node_modules/moment",
                    "isBase": true,
                    "main": "./moment.js",
                    "fileArray": [
                        "node_modules/moment/locale/.js",
                        "node_modules/moment/moment.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "object-assign",
                    "path": "node_modules/antd/node_modules/object-assign",
                    "isBase": false,
                    "main": "index.js",
                    "fileArray": [
                        "node_modules/antd/node_modules/object-assign/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "omit.js",
                    "path": "node_modules/omit.js",
                    "isBase": true,
                    "main": "index.js",
                    "fileArray": [
                        "object-assign",
                        "node_modules/omit.js/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-animate",
                    "path": "node_modules/rc-animate",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-animate/lib/Animate.js",
                        "react",
                        "node_modules/rc-animate/lib/ChildrenUtils.js",
                        "node_modules/rc-animate/lib/AnimateChild.js",
                        "node_modules/rc-animate/lib/util.js",
                        "react-dom",
                        "css-animation",
                        "node_modules/rc-animate/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-calendar",
                    "path": "node_modules/rc-calendar",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-calendar/lib/Calendar.js",
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "react-dom",
                        "rc-util/lib/KeyCode.js",
                        "node_modules/rc-calendar/lib/date/DateTable.js",
                        "node_modules/rc-calendar/lib/calendar/CalendarHeader.js",
                        "node_modules/rc-calendar/lib/calendar/CalendarFooter.js",
                        "node_modules/rc-calendar/lib/mixin/CalendarMixin.js",
                        "node_modules/rc-calendar/lib/mixin/CommonMixin.js",
                        "node_modules/rc-calendar/lib/date/DateInput.js",
                        "node_modules/rc-calendar/lib/util/index.js",
                        "babel-runtime/helpers/classCallCheck.js",
                        "babel-runtime/helpers/possibleConstructorReturn.js",
                        "babel-runtime/helpers/inherits.js",
                        "node_modules/rc-calendar/lib/date/DateTHead.js",
                        "node_modules/rc-calendar/lib/date/DateTBody.js",
                        "node_modules/rc-calendar/lib/date/DateConstants.js",
                        "moment",
                        "node_modules/rc-calendar/lib/util/.js",
                        "node_modules/rc-calendar/lib/month/MonthPanel.js",
                        "node_modules/rc-calendar/lib/year/YearPanel.js",
                        "rc-util/lib/Children/mapSelf.js",
                        "node_modules/rc-calendar/lib/month/MonthTable.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "classnames",
                        "node_modules/rc-calendar/lib/decade/DecadePanel.js",
                        "node_modules/rc-calendar/lib/calendar/TodayButton.js",
                        "node_modules/rc-calendar/lib/calendar/OkButton.js",
                        "node_modules/rc-calendar/lib/calendar/TimePickerButton.js",
                        "node_modules/rc-calendar/lib/locale/en_US.js",
                        "node_modules/rc-calendar/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-cascader",
                    "path": "node_modules/rc-cascader",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-cascader/lib/Cascader.js",
                        "react",
                        "rc-trigger",
                        "node_modules/rc-cascader/lib/Menus.js",
                        "array-tree-filter",
                        "react-dom",
                        "node_modules/rc-cascader/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-checkbox",
                    "path": "node_modules/rc-checkbox",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-checkbox/lib/Checkbox.js",
                        "react",
                        "rc-util/lib/PureRenderMixin.js",
                        "classnames",
                        "node_modules/rc-checkbox/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-collapse",
                    "path": "node_modules/rc-collapse",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-collapse/lib/Collapse.js",
                        "react",
                        "node_modules/rc-collapse/lib/Panel.js",
                        "node_modules/rc-collapse/lib/openAnimationFactory.js",
                        "classnames",
                        "node_modules/rc-collapse/lib/PanelContent.js",
                        "rc-animate",
                        "css-animation",
                        "node_modules/rc-collapse/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-dialog",
                    "path": "node_modules/rc-dialog",
                    "isBase": true,
                    "main": "./lib/DialogWrap.js",
                    "fileArray": [
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "node_modules/rc-dialog/lib/Dialog.js",
                        "rc-util/lib/getContainerRenderMixin.js",
                        "react-dom",
                        "rc-util/lib/KeyCode.js",
                        "rc-animate",
                        "node_modules/rc-dialog/lib/LazyRenderBox.js",
                        "rc-util/lib/getScrollBarSize.js",
                        "object-assign",
                        "node_modules/rc-dialog/lib/DialogWrap.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-dropdown",
                    "path": "node_modules/rc-dropdown",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-dropdown/lib/Dropdown.js",
                        "react",
                        "react-dom",
                        "rc-trigger",
                        "node_modules/rc-dropdown/lib/placements.js",
                        "node_modules/rc-dropdown/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-editor-mention",
                    "path": "node_modules/rc-editor-mention",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-editor-mention/lib/Mention.js",
                        "node_modules/rc-editor-mention/lib/exportContent.js",
                        "node_modules/rc-editor-mention/lib/getMentions.js",
                        "node_modules/rc-editor-mention/lib/Nav.js",
                        "rc-editor-core",
                        "react",
                        "node_modules/rc-editor-mention/lib/createMention.js",
                        "classnames",
                        "node_modules/rc-editor-mention/lib/Suggestions.js",
                        "node_modules/rc-editor-mention/lib/SuggestionPortal.js",
                        "node_modules/rc-editor-mention/lib/MentionContent.js",
                        "node_modules/rc-editor-mention/lib/mentionStore.js",
                        "draft-js",
                        "react-dom",
                        "node_modules/rc-editor-mention/lib/utils/getSearchWord.js",
                        "draft-js/lib/DraftOffsetKey.js",
                        "rc-animate",
                        "node_modules/rc-editor-mention/lib/utils/insertMention.js",
                        "dom-scroll-into-view",
                        "immutable",
                        "node_modules/rc-editor-mention/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-form",
                    "path": "node_modules/rc-form",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-form/lib/createForm.js",
                        "node_modules/rc-form/lib/createBaseForm.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "node_modules/rc-form/lib/utils.js",
                        "async-validator",
                        "warning",
                        "hoist-non-react-statics",
                        "node_modules/rc-form/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-input-number",
                    "path": "node_modules/rc-input-number",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "babel-runtime/helpers/defineProperty.js",
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "classnames",
                        "node_modules/rc-input-number/lib/mixin.js",
                        "node_modules/rc-input-number/lib/InputHandler.js",
                        "babel-runtime/helpers/classCallCheck.js",
                        "babel-runtime/helpers/possibleConstructorReturn.js",
                        "babel-runtime/helpers/inherits.js",
                        "node_modules/rc-input-number/lib/touchableFeedback.js",
                        "node_modules/rc-input-number/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-menu",
                    "path": "node_modules/rc-menu",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-menu/lib/Menu.js",
                        "node_modules/rc-menu/lib/SubMenu.js",
                        "node_modules/rc-menu/lib/MenuItem.js",
                        "node_modules/rc-menu/lib/MenuItemGroup.js",
                        "node_modules/rc-menu/lib/Divider.js",
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "node_modules/rc-menu/lib/MenuMixin.js",
                        "node_modules/rc-menu/lib/util.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "react-dom",
                        "rc-util/lib/KeyCode.js",
                        "rc-util/lib/createChainedFunction.js",
                        "classnames",
                        "dom-scroll-into-view",
                        "node_modules/rc-menu/lib/DOMWrap.js",
                        "node_modules/rc-menu/lib/SubPopupMenu.js",
                        "rc-util/lib/guid.js",
                        "node_modules/rc-menu/lib/SubMenuStateMixin.js",
                        "babel-runtime/helpers/typeof.js",
                        "rc-animate",
                        "rc-util/lib/Dom/addEventListener.js",
                        "rc-util/lib/Dom/contains.js",
                        "node_modules/rc-menu/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-notification",
                    "path": "node_modules/rc-notification",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-notification/lib/Notification.js",
                        "react",
                        "react-dom",
                        "rc-animate",
                        "rc-util/lib/createChainedFunction.js",
                        "classnames",
                        "node_modules/rc-notification/lib/Notice.js",
                        "node_modules/rc-notification/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-pagination",
                    "path": "node_modules/rc-pagination",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-pagination/lib/Pagination.js",
                        "react",
                        "node_modules/rc-pagination/lib/Pager.js",
                        "node_modules/rc-pagination/lib/Options.js",
                        "node_modules/rc-pagination/lib/KeyCode.js",
                        "node_modules/rc-pagination/lib/locale/zh_CN.js",
                        "node_modules/rc-pagination/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-progress",
                    "path": "node_modules/rc-progress",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-progress/lib/Line.js",
                        "node_modules/rc-progress/lib/Circle.js",
                        "react",
                        "node_modules/rc-progress/lib/props.js",
                        "node_modules/rc-progress/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-queue-anim",
                    "path": "node_modules/rc-queue-anim",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-queue-anim/lib/QueueAnim.js",
                        "react",
                        "react-dom",
                        "node_modules/rc-queue-anim/lib/utils.js",
                        "node_modules/rc-queue-anim/lib/animTypes.js",
                        "velocity-animate",
                        "node_modules/rc-queue-anim/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-radio",
                    "path": "node_modules/rc-radio",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-radio/lib/Radio.js",
                        "react",
                        "rc-checkbox",
                        "node_modules/rc-radio/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-rate",
                    "path": "node_modules/rc-rate",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-rate/lib/Rate.js",
                        "react-dom",
                        "react",
                        "node_modules/rc-rate/lib/util.js",
                        "node_modules/rc-rate/lib/Star.js",
                        "node_modules/rc-rate/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-select",
                    "path": "node_modules/rc-select",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-select/lib/Select.js",
                        "node_modules/rc-select/lib/Option.js",
                        "node_modules/rc-select/lib/OptGroup.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "react-dom",
                        "rc-util/lib/KeyCode.js",
                        "classnames",
                        "rc-animate",
                        "component-classes",
                        "node_modules/rc-select/lib/util.js",
                        "node_modules/rc-select/lib/SelectTrigger.js",
                        "node_modules/rc-select/lib/FilterMixin.js",
                        "babel-runtime/helpers/classCallCheck.js",
                        "babel-runtime/helpers/possibleConstructorReturn.js",
                        "babel-runtime/helpers/inherits.js",
                        "rc-menu",
                        "babel-runtime/helpers/objectWithoutProperties.js",
                        "rc-trigger",
                        "node_modules/rc-select/lib/DropdownMenu.js",
                        "babel-runtime/helpers/typeof.js",
                        "dom-scroll-into-view",
                        "warning",
                        "node_modules/rc-select/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-slider",
                    "path": "node_modules/rc-slider",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-slider/lib/Slider.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "babel-runtime/helpers/toConsumableArray.js",
                        "babel-runtime/helpers/extends.js",
                        "babel-runtime/helpers/classCallCheck.js",
                        "babel-runtime/helpers/possibleConstructorReturn.js",
                        "babel-runtime/helpers/inherits.js",
                        "react-dom",
                        "react",
                        "rc-util/lib/Dom/addEventListener.js",
                        "classnames",
                        "node_modules/rc-slider/lib/Track.js",
                        "node_modules/rc-slider/lib/Handle.js",
                        "node_modules/rc-slider/lib/Steps.js",
                        "node_modules/rc-slider/lib/Marks.js",
                        "warning",
                        "rc-tooltip",
                        "babel-runtime/helpers/typeof.js",
                        "node_modules/rc-slider/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-steps",
                    "path": "node_modules/rc-steps",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-steps/lib/Steps.js",
                        "node_modules/rc-steps/lib/Step.js",
                        "react",
                        "react-dom",
                        "classnames",
                        "node_modules/rc-steps/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-switch",
                    "path": "node_modules/rc-switch",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-switch/lib/Switch.js",
                        "react",
                        "classnames",
                        "node_modules/rc-switch/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-table",
                    "path": "node_modules/rc-table",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-table/lib/Table.js",
                        "react",
                        "node_modules/rc-table/lib/TableRow.js",
                        "node_modules/rc-table/lib/TableHeader.js",
                        "node_modules/rc-table/lib/utils.js",
                        "shallowequal",
                        "rc-util/lib/Dom/addEventListener.js",
                        "node_modules/rc-table/lib/TableCell.js",
                        "node_modules/rc-table/lib/ExpandIcon.js",
                        "object-path",
                        "node_modules/rc-table/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-tabs",
                    "path": "node_modules/rc-tabs",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-tabs/lib/Tabs.js",
                        "node_modules/rc-tabs/lib/TabPane.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "react",
                        "node_modules/rc-tabs/lib/KeyCode.js",
                        "classnames",
                        "node_modules/rc-tabs/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-time-picker",
                    "path": "node_modules/rc-time-picker",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-time-picker/lib/TimePicker.js",
                        "react",
                        "rc-trigger",
                        "node_modules/rc-time-picker/lib/Panel.js",
                        "node_modules/rc-time-picker/lib/placements.js",
                        "moment",
                        "babel-runtime/helpers/defineProperty.js",
                        "node_modules/rc-time-picker/lib/Header.js",
                        "node_modules/rc-time-picker/lib/Combobox.js",
                        "classnames",
                        "node_modules/rc-time-picker/lib/Select.js",
                        "react-dom",
                        "node_modules/rc-time-picker/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-tooltip",
                    "path": "node_modules/rc-tooltip",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-tooltip/lib/Tooltip.js",
                        "react",
                        "node_modules/rc-tooltip/lib/placements.js",
                        "rc-trigger",
                        "node_modules/rc-tooltip/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-tree",
                    "path": "node_modules/rc-tree",
                    "isBase": true,
                    "main": "lib/index.js",
                    "fileArray": [
                        "node_modules/rc-tree/lib/Tree.js",
                        "node_modules/rc-tree/lib/TreeNode.js",
                        "react",
                        "object-assign",
                        "classnames",
                        "node_modules/rc-tree/lib/util.js",
                        "rc-animate",
                        "node_modules/rc-tree/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-tree-select",
                    "path": "node_modules/rc-tree-select",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-tree-select/lib/Select.js",
                        "node_modules/rc-tree-select/lib/TreeNode.js",
                        "react",
                        "react-dom",
                        "rc-util/lib/KeyCode.js",
                        "classnames",
                        "object-assign",
                        "rc-animate",
                        "node_modules/rc-tree-select/lib/util.js",
                        "node_modules/rc-tree-select/lib/SelectTrigger.js",
                        "rc-trigger",
                        "rc-tree",
                        "rc-util/lib/Children/toArray.js",
                        "node_modules/rc-tree-select/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-upload",
                    "path": "node_modules/rc-upload",
                    "isBase": true,
                    "main": "./lib/index.js",
                    "fileArray": [
                        "node_modules/rc-upload/lib/Upload.js",
                        "babel-runtime/helpers/extends.js",
                        "react",
                        "node_modules/rc-upload/lib/AjaxUploader.js",
                        "node_modules/rc-upload/lib/IframeUploader.js",
                        "babel-runtime/helpers/defineProperty.js",
                        "classnames",
                        "node_modules/rc-upload/lib/request.js",
                        "node_modules/rc-upload/lib/uid.js",
                        "react-dom",
                        "warning",
                        "node_modules/rc-upload/lib/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "rc-util",
                    "path": "node_modules/rc-util",
                    "isBase": true,
                    "main": "index.js",
                    "fileArray": [
                        "node_modules/rc-util/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "react-slick",
                    "path": "node_modules/react-slick",
                    "isBase": true,
                    "main": "./lib.js",
                    "fileArray": [
                        "node_modules/react-slick/lib.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "shallowequal",
                    "path": "node_modules/shallowequal",
                    "isBase": true,
                    "main": "modules/index.js",
                    "fileArray": [
                        "lodash.keys.js",
                        "node_modules/shallowequal/modules/index.js"
                    ],
                    "dependencies": []
                },
                {
                    "name": "warning",
                    "path": "node_modules/warning",
                    "isBase": true,
                    "main": "warning.js",
                    "fileArray": [
                        "node_modules/warning/warning.js"
                    ],
                    "dependencies": []
                }
            ]
        },], value => {
            return false;
        }, 9999999);
    });



    itClass('createJsonFile', () => {
        itAdd([], value => true);
    });

})

run();