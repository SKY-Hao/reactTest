import  React from 'react';

class  ToIteam extends React.Component {

	//子组件如果想和父组件通信，子组件需要调用父组件传递过来的方法
    handleDelete(){
    	this.props.handleDeleteToItem(this.props.index);
	}
    /**
	 * 接受TodoList界面传过来的输入框中的值
     * @returns {XML}
     */
    render() {
        return (
			<div onClick={this.handleDelete.bind(this)}>
				{this.props.content}
			</div>
        )
    }
}
export default ToIteam