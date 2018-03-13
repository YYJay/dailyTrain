import React from 'react'
import { Icon } from 'semantic-ui-react'
// you can use any library or icon as you like

type Props = {
  pageSize: number,
  total: number,
  handlePageChange: Function,
}
type State = {
  currentPage: number,
  showPrevIcon: boolean,
  showNextIcon: boolean,
}

class Pagination extends React.PureComponent<Props, State> {
  pageTotal: number
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      showPrevIcon: false,
      showNextIcon: false,
    }
  }

  handlePageChange(pageNum: number) {
    let currentPage = pageNum
    if (currentPage < 1) currentPage = 1
    if (currentPage > this.pageTotal) currentPage = this.pageTotal
    if (currentPage !== this.state.currentPage) {
      this.setState({ currentPage })
      if (this.props.handlePageChange) {
        this.props.handlePageChange(currentPage)
      }
    }
  }

  render() {
    let { pageSize, total } = this.props
    const { showPrevIcon, showNextIcon } = this.state
    const { currentPage } = this.state
    pageSize = 20
    total = 140
    const pageTotal = total === 0 ? 1 : Math.ceil(total / pageSize)
    this.pageTotal = pageTotal
    let [showPrev, showNext] = []
    let pageTotalArr = Array.from(new Array(pageTotal), (val, index) => index + 1)
    if (pageTotal > 5) {
      [ showPrev, showNext] = [true, true]
      const len = pageTotalArr.length
      if (currentPage === 1 || currentPage === 2) {
        showPrev = false
        pageTotalArr = [1, 2, 3, 4, 5]
      } else if (currentPage === len || currentPage === len - 1) {
        showNext = false
        pageTotalArr = [len - 4, len - 3, len - 2, len - 1, len ]
      } else {
        pageTotalArr = pageTotalArr.filter(pageNum => Math.abs(pageNum - currentPage) < 3)
      }
    }
    return (
      <div>
        <div
          className="page-icon icon-left"
          title="上一页"
          style={currentPage === 1 ? { cursor: 'not-allowed' } : {}}
          onClick={() => { this.handlePageChange(currentPage - 1) }}
        >
          <Icon name="left chevron" />
        </div>
        {
          showPrev
          ? (<div
            className="page-icon page-nav"
            title="前五页"
            onMouseEnter={() => {this.setState({showPrevIcon: true})}}
            onMouseLeave={() => {this.setState({showPrevIcon: false})}}
            onClick={() => { this.handlePageChange(currentPage - 5) }}
            >
            {
              showPrevIcon
              ? <Icon name="angle double left" />
              : <span className="page-ellipsis">...</span>
            }
          </div>)
          : false
        }
        {
          pageTotalArr.map(item => (
            <div
              className={item === currentPage ? 'page-item page-item-active' : 'page-item'}
              key={item}
              onClick={() => { this.handlePageChange(item) }}
            >
              {item}
                </div>
          ))
        }
        {
          showNext
          ? (<div
            className="page-icon page-nav"
            title="后五页"
            onMouseEnter={() => {this.setState({showNextIcon: true})}}
            onMouseLeave={() => {this.setState({showNextIcon: false})}}
            onClick={() => { this.handlePageChange(currentPage + 5) }}
            >
            {
              showNextIcon
              ? <Icon name="angle double right" />
              : <span className="page-ellipsis">...</span>
            }
          </div>)
          : false
        }
        <div
          className="page-icon"
          title="下一页"
          style={currentPage === pageTotal ? { cursor: 'not-allowed' } : {}}
          onClick={() => { this.handlePageChange(currentPage + 1) }}
        >
          <Icon name="right chevron" />
        </div>
        <style jsx>{`{
          .page-item, .page-icon {
            background: white;
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border: 1px solid #C8C8C8;
            display: inline-block;
            margin: 0 5px;
            overflow: hidden;
            cursor: pointer;
            user-select:none;
          }
          .page-item-active {
            border: none;
            background-image: linear-gradient(-135deg, #A9F3CB 0%, #75E270 100%);
          }
          .page-icon {
            padding-left: 6px;
          }
          .icon-left {
            padding-left: 3px;
          }
          .page-nav {
             border: none;
             margin: 0;
             padding: 0;
          }
          .page-ellipsis {
            position: relative;
            top: -6px;
          }
        }`}
        </style>
      </div>
    )
  }
}

export default Pagination
