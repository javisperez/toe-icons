<script>
  import TiArrowDown from "./arrow-down.svelte";
import TiArrowLeft from "./arrow-left.svelte";
import TiArrowRight from "./arrow-right.svelte";
import TiArrowUp from "./arrow-up.svelte";
import TiAt from "./at.svelte";
import TiBackslash from "./backslash.svelte";
import TiBold from "./bold.svelte";
import TiBookmark from "./bookmark.svelte";
import TiBookmarkEmpty from "./bookmark-empty.svelte";
import TiBrackets from "./brackets.svelte";
import TiCaretDown from "./caret-down.svelte";
import TiCaretLeft from "./caret-left.svelte";
import TiCaretRight from "./caret-right.svelte";
import TiCaretUp from "./caret-up.svelte";
import TiCircle from "./circle.svelte";
import TiClock from "./clock.svelte";
import TiCloud from "./cloud.svelte";
import TiCloudDownload from "./cloud-download.svelte";
import TiCloudError from "./cloud-error.svelte";
import TiCloudUpload from "./cloud-upload.svelte";
import TiCode from "./code.svelte";
import TiCodeblock from "./codeblock.svelte";
import TiCog from "./cog.svelte";
import TiConnection from "./connection.svelte";
import TiConnection2 from "./connection-2.svelte";
import TiDeny from "./deny.svelte";
import TiDownload from "./download.svelte";
import TiDuck from "./duck.svelte";
import TiErrorCircle from "./error-circle.svelte";
import TiExclamation from "./exclamation.svelte";
import TiEye from "./eye.svelte";
import TiEyeSlash from "./eye-slash.svelte";
import TiFileRestore from "./file-restore.svelte";
import TiGithub from "./github.svelte";
import TiH1 from "./h1.svelte";
import TiH2 from "./h2.svelte";
import TiH3 from "./h3.svelte";
import TiHalfCircle from "./half-circle.svelte";
import TiHamburger from "./hamburger.svelte";
import TiHamburger2 from "./hamburger-2.svelte";
import TiHammer from "./hammer.svelte";
import TiHammerHead from "./hammer-head.svelte";
import TiHashtag from "./hashtag.svelte";
import TiHeart from "./heart.svelte";
import TiHeartEmpty from "./heart-empty.svelte";
import TiHighlighter from "./highlighter.svelte";
import TiHighlighterHead from "./highlighter-head.svelte";
import TiHighlighterHead2 from "./highlighter-head-2.svelte";
import TiHr from "./hr.svelte";
import TiInfoCircle from "./info-circle.svelte";
import TiItalic from "./italic.svelte";
import TiLink from "./link.svelte";
import TiLinkExternal from "./link-external.svelte";
import TiListOl from "./list-ol.svelte";
import TiListTask from "./list-task.svelte";
import TiListUl from "./list-ul.svelte";
import TiLockClose from "./lock-close.svelte";
import TiLockOpen from "./lock-open.svelte";
import TiMenuHorizontal from "./menu-horizontal.svelte";
import TiMenuVertical from "./menu-vertical.svelte";
import TiMinus from "./minus.svelte";
import TiMinusCircle from "./minus-circle.svelte";
import TiNotus from "./notus.svelte";
import TiPaperShredder from "./paper-shredder.svelte";
import TiPen from "./pen.svelte";
import TiPencil from "./pencil.svelte";
import TiPin from "./pin.svelte";
import TiPin2 from "./pin-2.svelte";
import TiPlus from "./plus.svelte";
import TiPlusCircle from "./plus-circle.svelte";
import TiPower from "./power.svelte";
import TiPrinter from "./printer.svelte";
import TiQuestion from "./question.svelte";
import TiQuoteClose from "./quote-close.svelte";
import TiQuoteOpen from "./quote-open.svelte";
import TiReact from "./react.svelte";
import TiRefresh from "./refresh.svelte";
import TiRefreshCcw from "./refresh-ccw.svelte";
import TiSearch from "./search.svelte";
import TiSidebar from "./sidebar.svelte";
import TiSidebar2 from "./sidebar-2.svelte";
import TiSidebarCollapse from "./sidebar-collapse.svelte";
import TiSidebarExpand from "./sidebar-expand.svelte";
import TiSpinner from "./spinner.svelte";
import TiSquare from "./square.svelte";
import TiStar from "./star.svelte";
import TiStarEmpty from "./star-empty.svelte";
import TiStrike from "./strike.svelte";
import TiSuccess from "./success.svelte";
import TiTags from "./tags.svelte";
import TiTimes from "./times.svelte";
import TiToe from "./toe.svelte";
import TiToggleOff from "./toggle-off.svelte";
import TiToggleOn from "./toggle-on.svelte";
import TiTrash from "./trash.svelte";
import TiTriangle from "./triangle.svelte";
import TiUnderline from "./underline.svelte";
import TiUnlink from "./unlink.svelte";
import TiVue from "./vue.svelte";
import TiWarningTriangle from "./warning-triangle.svelte";
import TiWrench from "./wrench.svelte";
import TiWrenchHead from "./wrench-head.svelte";

  export let icon;
  export let size = 24;
  export let spin = false;
  export let color = "currentColor";
  export let stroke = "0";
  export let strokeColor = "currentColor";

  const iconComponentMap = {
    "arrow-down": TiArrowDown,
"arrow-left": TiArrowLeft,
"arrow-right": TiArrowRight,
"arrow-up": TiArrowUp,
"at": TiAt,
"backslash": TiBackslash,
"bold": TiBold,
"bookmark": TiBookmark,
"bookmark-empty": TiBookmarkEmpty,
"brackets": TiBrackets,
"caret-down": TiCaretDown,
"caret-left": TiCaretLeft,
"caret-right": TiCaretRight,
"caret-up": TiCaretUp,
"circle": TiCircle,
"clock": TiClock,
"cloud": TiCloud,
"cloud-download": TiCloudDownload,
"cloud-error": TiCloudError,
"cloud-upload": TiCloudUpload,
"code": TiCode,
"codeblock": TiCodeblock,
"cog": TiCog,
"connection": TiConnection,
"connection-2": TiConnection2,
"deny": TiDeny,
"download": TiDownload,
"duck": TiDuck,
"error-circle": TiErrorCircle,
"exclamation": TiExclamation,
"eye": TiEye,
"eye-slash": TiEyeSlash,
"file-restore": TiFileRestore,
"github": TiGithub,
"h1": TiH1,
"h2": TiH2,
"h3": TiH3,
"half-circle": TiHalfCircle,
"hamburger": TiHamburger,
"hamburger-2": TiHamburger2,
"hammer": TiHammer,
"hammer-head": TiHammerHead,
"hashtag": TiHashtag,
"heart": TiHeart,
"heart-empty": TiHeartEmpty,
"highlighter": TiHighlighter,
"highlighter-head": TiHighlighterHead,
"highlighter-head-2": TiHighlighterHead2,
"hr": TiHr,
"info-circle": TiInfoCircle,
"italic": TiItalic,
"link": TiLink,
"link-external": TiLinkExternal,
"list-ol": TiListOl,
"list-task": TiListTask,
"list-ul": TiListUl,
"lock-close": TiLockClose,
"lock-open": TiLockOpen,
"menu-horizontal": TiMenuHorizontal,
"menu-vertical": TiMenuVertical,
"minus": TiMinus,
"minus-circle": TiMinusCircle,
"notus": TiNotus,
"paper-shredder": TiPaperShredder,
"pen": TiPen,
"pencil": TiPencil,
"pin": TiPin,
"pin-2": TiPin2,
"plus": TiPlus,
"plus-circle": TiPlusCircle,
"power": TiPower,
"printer": TiPrinter,
"question": TiQuestion,
"quote-close": TiQuoteClose,
"quote-open": TiQuoteOpen,
"react": TiReact,
"refresh": TiRefresh,
"refresh-ccw": TiRefreshCcw,
"search": TiSearch,
"sidebar": TiSidebar,
"sidebar-2": TiSidebar2,
"sidebar-collapse": TiSidebarCollapse,
"sidebar-expand": TiSidebarExpand,
"spinner": TiSpinner,
"square": TiSquare,
"star": TiStar,
"star-empty": TiStarEmpty,
"strike": TiStrike,
"success": TiSuccess,
"tags": TiTags,
"times": TiTimes,
"toe": TiToe,
"toggle-off": TiToggleOff,
"toggle-on": TiToggleOn,
"trash": TiTrash,
"triangle": TiTriangle,
"underline": TiUnderline,
"unlink": TiUnlink,
"vue": TiVue,
"warning-triangle": TiWarningTriangle,
"wrench": TiWrench,
"wrench-head": TiWrenchHead,
  };
</script>

  <svelte:component this={iconComponentMap[icon]}
    size={size}
    stroke={stroke}
    color={color}
    stroke-color={strokeColor}
    spin={spin}/>
