import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import { JournalList } from './components/JournalList/JournalList';
import { Body } from './layout/Body/Body';
import { LeftPanel } from './layout/LeftPanel/LeftPanel';


export const App = () => {

	const INITIAL_DATA = [];

	const [items, setItem] = useState(INITIAL_DATA);

	const addItem = item => {
		setItem(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1

		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
};


