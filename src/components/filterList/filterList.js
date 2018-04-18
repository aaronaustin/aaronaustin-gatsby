import React from 'react'
import styles from './_filterList.module.scss'
import SearchBar from '../searchBar/searchBar.js'
import ListItem from '../listItem/listItem.js'
import IconsSite from '../icons/iconsSite'

class FilterList extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterList = this.handleFilterList.bind(this);
        this.state = { list: props.list, query: '', category: ''};
    }

    handleFilterList = (query) => {
        this.setState(query);
        console.log(this.state);
    }

    render() {
        let list = this.state.list.slice();
        
        if (this.state.query) {
            list = list.filter(({node}) => {
                return (
                    node.title.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1 ||
                    node.path.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1
                )
            })
        }

        if (this.state.category) {
            list = list.filter(({node}) => {
                let searchCategory = category => category.title.toLowerCase() == this.state.category.toLowerCase();
                return node.tags.some(searchCategory);
            })
        }

        console.log(list);
        return (
            <div className={styles.container}>
                <SearchBar 
                    onQueryChange={this.handleFilterList} 
                    value={this.state.query} 
                    category={this.state.category}
                    placeholder={`Search ${this.props.listType}`} 
                    filters={this.props.filters}/>

                <section className="content">
                    <h1 className="titleItalic">
                        <IconsSite name={this.props.listType} /> {this.props.listType} ({list.length})
                    </h1>
                    {list.map(({node}) => {
                        return (
                            <ListItem
                                key={node.id}
                                title={node.title}
                                intro={node.body.childMarkdownRemark.excerpt}
                                link={node.path}
                                categories={node.tags}
                                image={node.image.sizes} />
                        )
                    })}
                </section>
            </div>
        )
    }
}
export default FilterList
