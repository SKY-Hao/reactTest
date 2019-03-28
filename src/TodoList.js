import React, { Component } from 'react';
import ToIteam from './ToIteam';

class TodoList extends Component {

		constructor(props) {
			super(props);
			this.state = {
				list: [],
				inputValue:''
			}
		};

    /**
	 * 点击事件
     */
        handleBtnClick(){
            this.setState({
				list: [...this.state.list,this.state.inputValue],
				inputValue : ""
            })
        }

    /**
	 * 输入框值获取
     * @param e
     */
		handleInputChange(e){
				this.setState({
					inputValue : e.target.value
				})
		}

		/**
		 * 删除
		 * @returns {XML}
		 */
		handleDelete(index){
			const  list = [...this.state.list];
			list.splice(index,1);
			this.setState({
				list: list
			})
		}

    /**
	 * handleDeleteToItem
     * @returns {XML}
     */
    handleDeleteToItem(index){
    	//console.log(index);
        const  list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
	}

		//注意:父组件通过属性的形式向子组件传递参数
		//		子组件通过props接受父组件传递过来的参数

        render(){
            return (
				<div>
					<div>
						<input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
						<button onClick={this.handleBtnClick.bind(this)}>add</button>
					</div>
					<ul>
                        {
                            this.state.list.map((item,index) => {
                            	//将输入框中的值传递到另一个界面显示，定义content接受
								//index 为下标[0,1,2,3,4,5]
                            	return <ToIteam handleDeleteToItem={this.handleDeleteToItem.bind(this)} key={index} content={item} index={index}/>
								//将输入框中的值在本页面显示
                                // return <li key={index} onClick={this.handleDelete.bind(this)}>{item}</li>
                            })
                        }
					</ul>
				</div>
            );
        }

}
export default TodoList;